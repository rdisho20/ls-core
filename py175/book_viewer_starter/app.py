from flask import Flask, render_template, g, redirect, request

app = Flask(__name__)

@app.before_request
def load_contents():
    with open("book_viewer/data/toc.txt", "r") as file:
        g.contents = file.readlines()

@app.route("/")
def index():
    return render_template('home.html', contents=g.contents)

@app.route("/chapters/<page_num>")
def chapter(page_num):
    chapter_name = g.contents[int(page_num) - 1]
    chapter_title = f"Chapter {page_num}: {chapter_name}"

    with open(f'book_viewer/data/chp{page_num}.txt', 'r') as file:
        chapter = file.read()

    return render_template("chapter.html",
                           chapter_title=chapter_title,
                           contents=g.contents,
                           chapter=chapter)

@app.route("/search")
def search():
    query = request.args.get('query', '')
    results = chapter_contents(query) if query else []
    return render_template("search.html", query=query, results=results)

def in_paragraphs(text):
    return text.split('\n\n')

def chapter_contents(query):
    if not query:
        return []

    results = []
    for idx, name in enumerate(g.contents):
        with open(f'book_viewer/data/chp{idx + 1}.txt', 'r') as file:
            chapter_contents = file.read()
        
        paragraphs = get_paragraph_ids(chapter_contents)
        if query.lower() in chapter_contents.lower():
        
            matches = {}
            for index, paragraph in paragraphs.items():
                if query.lower() in paragraph.lower():
                    matches[index + 1] = paragraph
            
            results.append({'number': idx + 1,
                            'name': name,
                            'paragraphs': matches})
    
    return results

def get_paragraph_ids(chapter_contents):
    split_content = chapter_contents.split('\n\n')
    paragraphs = {}

    for index, paragraph in enumerate(split_content):
        paragraphs[index] = paragraph
    
    return paragraphs

def highlight_match(text, query):
    return text.replace(query, f'<strong>{query}</strong>')

app.jinja_env.filters['in_paragraphs'] = in_paragraphs
app.jinja_env.filters['highlight_match'] = highlight_match

@app.errorhandler(404)
def page_not_found(error):
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True, port=5003)