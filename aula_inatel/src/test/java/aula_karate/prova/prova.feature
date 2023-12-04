Feature: Executar testes funcionais na PokeAPI

  Background:

    * def url_base = "https://pokeapi.co/api/v2/"

  Scenario: Obter informações sobre um Pokémon existente (GET)
    Given url url_base + 'pokemon/1/'
    When method get
    Then status 200
    And match response.name == 'bulbasaur'
    And match response.types[0].type.name == 'grass'

  Scenario: Tentativa de obter Pokémon inexistente (GET)
    Given url url_base + 'pokemon/9999999/'
    When method get
    Then status 404

  Scenario: Tentativa de obter Pokémon inexistente (GET)
    Given url url_base + 'type/9999999/'
    When method get
    Then status 404

  Scenario: Obter informações sobre um Pokémon existente (GET)
    Given url url_base + 'pokemon/4/'
    When method get
    Then status 200
    And match response.name == 'charmander'
    And match response.abilities[0].ability.name == 'blaze'

  Scenario: Pesquisar Tipo por nome existente (GET)
    Given url url_base + 'type/3'
    When method get
    Then status 200
    And match response.generation.name == 'generation-i'


  Scenario: Retornar 401 Authentication Failed (POST)
    Given url 'https://gorest.co.in//public/v2/users/1830420/posts'
    When method post
    Then status 401