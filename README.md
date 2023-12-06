
# My-Functions

Baza do budowania swoich funkcji

## Uruchomienie

Sklonuj repo

```bash
git clone https://github.com/GrzegorzCymborski/my-functions
```

Przejdź do folderu projektu

```bash
cd my-functions
```

Zainstaluj zależności

```bash
pnpm install
```

Start projektu

```bash
pnpm run dev
```


## API
Przykład użycia:
```bash
http://localhost:3000/api/get-yt-subtitles?video=XXX
```
`XXX` - ID / URL do filmu YT


### Możliwe odpowiedzi:
#### Brak napisów:
```js
{
 "response": "Nie znaleziono napisów dla podanego video"
}

status: 404
```

#### Brak ID:
```js
{
 "response": "Nie znaleziono napisów dla podanego video"
}

status: 400
```

#### Poprawna odpowiedź:

```js
response: [
    { text: 'Cześć!', duration: 200, offset: 1000 },
    { text: 'Ładna dziś pogoda...', duration: 500, offset: 3000 }
  ]

status: 200 
```
