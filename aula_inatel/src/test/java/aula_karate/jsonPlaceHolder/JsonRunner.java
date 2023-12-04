package aula_karate.jsonPlaceHolder;

import com.intuit.karate.junit5.Karate;

class JsonRunner {

    @Karate.Test
    Karate testPlaceHolder() {
        return Karate.run("jsonPlaceHolder").relativeTo(getClass());
    }

}
