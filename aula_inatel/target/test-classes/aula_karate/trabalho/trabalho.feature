Feature: Testes na API https://gorest.co.in/public/v2/posts

  Background:
    * def url_base = 'https://gorest.co.in/public/v2/posts'

  Scenario: Obter informações sobre um post existente (GET)
    Given url url_base + '/87749'
    When method get
    Then status 200
    And match response.title == 'Complectus eius vesco acceptus vinculum.'
    And match response.body == 'Veritas sunt aperiam. Cicuta eligendi conduco. Aperio antepono sufficio. Acidus alter eum. Alii voveo fugiat. Ager et qui. Adficio spero earum. Acies maxime suscipio. Nobis solus vero. Arceo venio quasi. Ceno contra vulpes. Decimus vomica verumtamen. Civis nobis concido.'


  Scenario: Tentativa de obter post inexistente (GET)
    Given url url_base + '/9999999'
    When method get
    Then status 404

  Scenario: Criar um novo post (POST)
    Given url url_base
    And header Authorization = 'Bearer 3b8ff539f3f7b5c5aeb0614bf16b5ec634a755fa06e2379e288960666024cee7'
    And request
    """
    {
    "user_id": 5808961,
    "title": "Novo Post",
    "body": "Conteúdo do novo post."
    }
    """
    When method post
    Then status 201

  Scenario: Tentativa de criar post sem título (POST)
    Given url url_base
    And header Authorization = 'Bearer 3b8ff539f3f7b5c5aeb0614bf16b5ec634a755fa06e2379e288960666024cee7'
    And request
    """
    {
    "user_id": 5808961,
    "body": "Conteúdo do novo post sem título."
    }
    """
    When method post
    Then status 422

  Scenario: Atualizar um post existente (PUT)
    Given url url_base + '/87747'
    And header Authorization = 'Bearer 3b8ff539f3f7b5c5aeb0614bf16b5ec634a755fa06e2379e288960666024cee7'

    And request
    """
    {
    "title": "Novo Título",
    "body": "Novo conteúdo do post."
    }
    """
    When method put
    Then status 200
    And match response.title == 'Novo Título'
    And match response.body == 'Novo conteúdo do post.'

  Scenario: Tentativa de atualizar post inexistente (PUT)
    Given url url_base + '/9999999'
    And request
    """
    {
    "title": "Tentativa de Atualizar Post Inexistente",
    "body": "Conteúdo da tentativa de atualizar post inexistente."
    }
    """
    When method put
    Then status 404
