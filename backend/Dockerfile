# Pobieramy obraz Pythona
FROM python:3.9

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy pliki do kontenera
COPY . .

# Instalujemy zależności
RUN pip install -r requirements.txt

# Otwieramy port 5000
EXPOSE 5000

# Uruchamiamy aplikację
CMD ["python", "app.py"]
