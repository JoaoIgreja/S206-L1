Feature: Testando API pokemon.

  Scenario: Testando retorno pokemon/gengar.
    Given url "https://pokeapi.co/api/v2/pokemon/gengar"
    When method get
    Then status 200

  Scenario: Testando retorno pokemon/gengar com informações inválidas.
    Given url "https://pokeapi.co/api/v2/pokemon/gengar/1234"
    When method get
    Then status 404

