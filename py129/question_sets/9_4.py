class DocumentSystem:
    def process_document(self, doc):
        doc_process = doc.process()
        return doc_process

class Document:
    def __init__(self, content):
        self.content = content

class TextDocument(Document):
    # LS mentioned best practice to implement __init__() here even if same arguments as parent
    # will omit here and following subclasses for brevity
    def process(self):
        word_count = len(self.content.split())
        return f"Text document processed. Word count: {word_count}"

class SpreadsheetDocument(Document):    
    def process(self):
        row_count = len(self.content.split("\n"))
        return f"Spreadsheet processed. Row count: {row_count}"

class PresentationDocument(Document):    
    def process(self):
        slide_count = len(self.content.split("---SLIDE---"))
        return f"Presentation processed. Slide count: {slide_count}"


# Test Case
system = DocumentSystem()
documents = [
    TextDocument("Hellow world this is a test document"),
    SpreadsheetDocument("row1\nrow2\nrow3\nrow4"),
    PresentationDocument("Title slide---SLIDE---Content slide---SLIDE---Summary slide")
]

for doc in documents:
    print(system.process_document(doc))