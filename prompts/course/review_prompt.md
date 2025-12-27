# Tarea

Necesito que analises estas reviews:

    """
        Review 1:

        <La comida en 'El Sabor Andino' estaba exquisita, especialmente el lomo saltado, tierno y lleno de sabor. El servicio fue atento y el ambiente acogedor. ¡Totalmente recomendado para una cena especial!>

    """

    """
    Review 2:

        <La trama era predecible y los personajes poco creíbles. Aunque la fotografía era buena, la película se hizo larga y no la recomendaría. El final fue decepcionante.>

    """


    """
    Review 3:

        <El teléfono funciona bien y la cámara es genial, pero la batería se agota muy rápido, lo cual es frustrante. El proceso de compra fue fácil, pero el embalaje podría ser más seguro>

    """

    """
    Review 4:
        <Estoy absolutamente indignado. Compré un monitor que supuestamente era 'de alta gama' y me llegó con la pantalla completamente estallada. El paquete venía sin ninguna protección, parece que lo tiraron desde un quinto piso antes de entregarlo.

        Lo que realmente me hace perder los estribos es la nula atención al cliente. He enviado cinco correos electrónicos y he llamado diez veces al número de soporte; nadie responde o me cuelgan el teléfono. Se están quedando con mi dinero y no me dan ninguna solución.
        Es una absoluta falta de profesionalidad y una estafa descarada. Juegan con el dinero de la gente de la forma más cínica posible. Si valoras tu dinero y tu paciencia, no compres nada en esta tienda. Ya he iniciado una reclamación legal. ¡Son unos impresentables!
    >"""

# Instrucciones

    1. Analisa cada una de estas review y dime si cada una es positiva, negativa o mixta.
    2. De cada review separa 3 emociones seaparadas por comas.
    3. Analisa con todo lo que obtuviste si el autor de la review esta expresando enfado:

            ejemplo de enfado en review:
            """
                Es increíblemente frustrante haber gastado mi tiempo y dinero en este lugar. Fuimos a celebrar un cumpleaños y la experiencia fue un desastre de principio a fin.
                Primero, esperamos más de 40 minutos por una mesa que ya teníamos reservada. Cuando por fin nos sentamos, el camarero fue extremadamente grosero y parecía molesto por tener que atendernos. Pedimos las bebidas y tardaron otros 20 minutos en llegar, y para colmo, estaban calientes.
                Lo peor fue la comida: mi plato llegó frío y la carne estaba tan dura que era imposible de comer. Cuando intenté decírselo al encargado, ni siquiera se disculpó; simplemente puso una cara de desprecio y se dio la vuelta.
                Es una falta total de respeto al cliente. Si buscan una buena cena y un trato digno, vayan a cualquier otro lugar menos aquí. No pienso volver nunca y me aseguraré de que nadie que conozca lo haga. ¡Una vergüenza total!
            """

            * El enfado solo aparece en reviews negativas, si es mixta o positiva entonces no deberia haber enfado.
            Ya que o esta feliz o no esta del todo descontento. El enfado cruza el humbral hacia el enojo y estress alto de la persona. puede que sea negativa pero no necesariamente enfadado, ejemplo en algunos casos puede pedir cambio de un producto, pero al no importarle tanto el producto solo lo dejo como una review negativa. Ejemplo de enfado es cuando se le hizo pasar un mal momento a la persona ademas de que lo deseado por el no cumplio las expectativas.

    4. Encuentra de ser posible el articulo/producto y marca/lugar al que se le hace la review
    5. Busca si las reviews contienen alguno de los temas de la siguiente topic_list:
    """
            topic_list = [
            "mala atención y grosería del personal",
            "cobros indebidos y cargos ocultos",
            "retrasos excesivos en la entrega",
            "productos defectuosos o de mala calidad",
            "soporte técnico que no responde",
            "publicidad engañosa y estafas",
            "falta de higiene y limpieza",
            "ineficiencia burocrática",
            "negativa a realizar reembolsos"
        ]
    """

    # RESULTADO ESPERADO
    1. Devuelve todo con el siguiente formato JSON:
    """
        [
            {
                Producto:
                Marca:
                resumenReview: 1 oracion (maximo 70 caracteres).
                typo: positiva/negativa/mixta
                justificacion:1 oracion (maximo 70 caracteres).
                emociones:
                enfado: 1 o 0
                topic_list: agrega los temas de la topic list si es que encuentras alguno en la review

            }
        ]
    """
