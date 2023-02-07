## ENDPOINTS

```
* Obtener articulos

    GET /articles

* Guardar artículo

    POST /articles

    Para mandar datos:

        {
            "title": "Prueba",
            "category": "Anime",
            "body": "Prueba"
        }

* Modificar artículo

    POST /articles/update

    Para mandar datos a modificar usando id del artículo:

        {
            "id": "63d084e79abacce6ee312221"
            "title": "Prueba",
            "category": "Anime",
            "body": "Prueba"
        }

* Eliminar artículo

    DELETE /articles

    Elimina artículo usando id del artículo:

        {
            "id": "63d084e79abacce6ee312221"
        }


```

##
