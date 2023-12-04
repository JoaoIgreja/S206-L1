package aula_karate.trabalho;

import com.intuit.karate.junit5.Karate;

class trabalhoRunner {

    @Karate.Test
    Karate testTrab() {
        return Karate.run("trabalho").relativeTo(getClass());
    }

}
