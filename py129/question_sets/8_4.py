class DatabaseSource:
    def __init__(self, source):
        self.source = source

class CSVSource:
    def __init__(self, source):
        self.source = source

class APISource:
    def __init__(self, source):
        self.source = source

class SummaryReport:
    def generate(self, data):
        print(f"Summary Report: {data.source}")

class DetailedReport:
    def generate(self, data):
        print(f"Detailed Report: {data.source}")

class ChartReport:
    def generate(self, data):
        print(f"Chart Report: {data.source}")



# Create data sources
db_source = DatabaseSource("students")
csv_source = CSVSource("grades.csv")
api_source = APISource("https://api.school.com/attendance")

# Create report generators
summary_report = SummaryReport()
detailed_report = DetailedReport()
chart_report = ChartReport()

# Generate different reports from different sources
summary_report.generate(db_source)
detailed_report.generate(csv_source)
chart_report.generate(api_source)

# Should also work with any combination
summary_report.generate(api_source)
detailed_report.generate(db_source)
chart_report.generate(csv_source)