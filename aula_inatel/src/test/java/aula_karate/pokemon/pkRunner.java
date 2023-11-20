package aula_karate.pokemon;

import com.intuit.karate.junit5.Karate;

class pkRunner {

    @Karate.Test
    Karate testPokemon() {
        return Karate.run("pokemon").relativeTo(getClass());
    }

}
