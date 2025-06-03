class WeatherApp:
    def get_forecast(self, service):
        data = service.fetch_data()
        return service.format_data(data)

class NationalWeatherService:
    def fetch_data(self):
        return {"temp": 22, "condition": "Sunny"}
    
    def format_data(self, data):
        return f"National Weather: {data['temp']}°C and {data['condition']}"

class WeatherNetworkService:
    def fetch_data(self):
        return {"temperature": 22, "sky": "Clear"}
    
    def format_data(self, data):
        return f"Weather Network: {data['temperature']}°C and {data['sky']}"

class AccuWeatherService:
    def fetch_data(self):
        return {"celsius": 22, "weather": "No clouds"}
    
    def format_data(self, data):
        return f"AccuWeather: {data['celsius']}°C and {data['weather']}"


app = WeatherApp()
services = [NationalWeatherService(), WeatherNetworkService(), AccuWeatherService()]

for service in services:
    print(app.get_forecast(service))