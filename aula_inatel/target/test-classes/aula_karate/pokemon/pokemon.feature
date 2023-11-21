Feature: Testando API pokemon.

  Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2/'

  Scenario: Testando retorno pokemon/gengar.
    Given url "https://pokeapi.co/api/v2/pokemon/gengar"
    When method get
    Then status 200

  Scenario: Testando retorno pokemon/gengar com informações inválidas.
    Given url "https://pokeapi.co/api/v2/pokemon/chocolate"
    When method get
    Then status 404

  Scenario: Testando retorno pokemon/gengar e verificando o JSON.
    Given url url_base
    And path 'pokemon/gengar'
    When method get
    Then status 200
    And match response.name == "gengar"
    And match response.id == 94

  Scenario: Testando retorno pokemon rede entrando em um dos elementos do array de idiomas e testando retorno JSON.
    Given url url_base
    And path '/version/10/'
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7

  Scenario: Testando retorno pokemon rede entrando em um dos elementos do array de habilidades e testando retorno JSON.
    Given url url_base
    And path '/ability/26/'
    When method get
    Then status 200
    And def habilidade = $.effect_entries[1].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 9

  Scenario: Testando retorno pokemon/gengar e verificando o JSON.
    Given url url_base
    And path 'ability/imposter'
    When method get
    Then status 200
    And match response.effect == "This Pokémon transforms into a random opponent upon entering battle. This effect is identical to the move transform."

  Scenario: Testando retorno ability/imposter e verificando o JSON.
    Given url url_base
    And path 'ability/imposter'
    When method get
    Then status 200
    And match response.short_effect == "Transforms upon entering battle."


