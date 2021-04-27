import { Component } from "react";
import { Subject } from "rxjs";

const heroSubject = new Subject();

const CrossComponentCommService = {
  updateHeroSubject: (hero) => {
    heroSubject.next(hero);
  },

  getHeroSubject: () => {
    return heroSubject.asObservable();
  },
};

export default CrossComponentCommService;
