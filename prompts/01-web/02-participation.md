I want to implement several features and changes on my web. I'm going to give you more details:

1. When clicking on "Participa" button in categorias.astro page I want to open a confirmation modal with the following text if user is not logged:

>La participación a esta categoría está limitada para grupos Scouts de MSC o de ASDE, en caso de no pertenecer a ningún grupo, indíquelo en el siguiente formulario. Debes de registrarte en la página para poder participar

If user is logged, then text is: 

>La participación a esta categoría está limitada para grupos Scouts de MSC o de ASDE, en caso de no pertenecer a ningún grupo, indíquelo en el siguiente formulario.

This confirmation modal is going to open in all categories except for Emprendimiento joven, Representación cultural jerezana and Acción social. In that categories if the user is not logged, text would be:

>Debes de registrarte en la página para poder participar

After confirming, a participation form in a new page should appear. This should first request if the user is a scout group or not. If is a scout group a form with following fields would appear:

1. Select single option of an array of groups to know which scout group user belongs.
    1. Los Descalzos
    2. Mundo Nuevo
    3. Delaware
    4. Fátima
    5. San José
    6. La Salle
    7. Las Viñas
    8. El Pilar
    9. San Benito
    10. Juan Pablo II
    11. Virgen de la Candelaria
    12. San Jorge
    13. San Francisco
    14. El Carmen
    15. Santo Domingo Savio
    15. Altair
    16. Impeesa
    17. Prometeo
    18. Kenya

2. Teléfono
3. Describe tu participación
4. Field for uploading multiple files

If is not a scout group, a form with following fields would appear:

1. Nombre
2. Apellidos
3. Teléfono
4. Describe tu participación
5. Field for uploading multiple files

When submitting the form you should call /api/v1/category?name={categoryName} to get categoryId, then call to /api/v1/category/{categoryId}/participate with a JSON representing form information and files in multipart way. For submit button use this: https://ui.aceternity.com/components/stateful-button

For file upload use this component: https://ui.aceternity.com/components/file-upload

So far, dont implement login and singup modal. I'll implement later.