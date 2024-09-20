package com.example.vue_study_spring.main;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AboutController {
    @GetMapping("/api/about")
    public GetAboutRespDto hello(){
        GetAboutRespDto getAboutRespDto = new GetAboutRespDto();
        getAboutRespDto.setStr("Hello!");
        return getAboutRespDto;
    }
}
