package aula_karate.prova;

import com.intuit.karate.junit5.Karate;

class provaRunner {

    @Karate.Test
    Karate testProva() {
        return Karate.run("prova").relativeTo(getClass());
    }

}
