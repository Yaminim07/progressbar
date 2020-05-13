import React, { useState } from 'react';
import ProgressBar from './progressbar';
import './App.css';

function App() {
  const [scrollPercent, setscrollPercent] = useState("0%");

  const scrollHandler = function(){
    let bodyHeight = document.body.scrollHeight,
        windowHeight = window.innerHeight,
        scrollOffset = window.pageYOffset,
        scrollPercent;

    if(bodyHeight - scrollOffset <= windowHeight)
    scrollPercent = "100%";
    else
    scrollPercent = Math.trunc(scrollOffset * 100 / (bodyHeight - windowHeight)) + '%'
    setscrollPercent(scrollPercent);
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <div className="App">
      <div className="progressbar-container">
        <ProgressBar progress={scrollPercent} barHeight="15px"></ProgressBar>
      </div>
      <header>This is a header</header>
      <section>
        <h1>Lorem Ipsum</h1>
        <p>Ea invidunt sadipscing at takimata duo sed, sed sed labore clita clita lorem sit sed et, ipsum erat ipsum et justo stet elitr invidunt, kasd dolor lorem accusam duo eirmod eos voluptua sadipscing et. At accusam sit est no magna. Voluptua vero accusam justo sadipscing at nonumy, erat kasd et no sed, et nonumy no eirmod diam sadipscing accusam rebum elitr, amet dolores et ipsum tempor justo stet, kasd nonumy diam est sed accusam. Stet vero no accusam takimata sea amet, lorem no ipsum sanctus clita dolor ut kasd et, dolores magna labore diam et, eirmod aliquyam ipsum eirmod sanctus.</p>
        <h2>Lorem Ipsum</h2>
        <p>Magna duo vero sea ea dolore ea et vero kasd ea. Takimata at justo justo justo dolor ut vero et sit, diam sed magna erat sed erat rebum dolor eos, eos et dolore et eos accusam gubergren clita. Accusam invidunt erat et diam sed. Et tempor eirmod tempor justo justo ipsum invidunt, eirmod nonumy sit et rebum invidunt accusam, ipsum clita lorem dolor tempor kasd dolor ea ut. Sea sea et lorem eirmod clita dolore no voluptua ipsum. Sed sadipscing clita labore aliquyam dolor tempor. Dolores consetetur at nonumy sed stet, justo no ea dolores sadipscing. Sadipscing ipsum ea dolores ipsum aliquyam voluptua clita. Ea sit vero aliquyam rebum diam sed sed. Gubergren vero et dolore duo, kasd erat duo et lorem. Sit eirmod labore takimata et, sed sanctus aliquyam voluptua takimata erat kasd, sit diam est voluptua sadipscing duo clita takimata, amet duo dolores est lorem gubergren clita consetetur sanctus at. Ut erat et ut lorem eos sea labore. Erat diam invidunt diam sanctus dolore sadipscing dolor ipsum labore, sadipscing est accusam rebum rebum labore voluptua et, labore duo aliquyam accusam amet et. Diam dolor no rebum voluptua amet consetetur duo amet amet. Stet labore diam amet elitr rebum sanctus labore eirmod accusam, justo dolor justo et ipsum elitr accusam, at invidunt nonumy sed kasd no aliquyam, justo vero et et kasd sed est. Diam takimata et amet et sed sit sanctus, ipsum et stet duo takimata nonumy tempor, et magna lorem no diam sed, diam et accusam voluptua amet nonumy. Duo ea dolore vero lorem tempor nonumy invidunt, invidunt est sed sadipscing dolor sit at. Kasd ea magna et diam, vero sed et sadipscing et sit ipsum magna erat. Magna gubergren dolore no vero, amet sed tempor at labore tempor lorem sea nonumy, vero vero ipsum sit accusam diam ea, et gubergren amet eirmod ipsum lorem, diam est tempor labore amet elitr. Rebum rebum consetetur est sit, vero sanctus invidunt amet et no takimata kasd ea, dolor clita tempor accusam gubergren. Amet sed erat at gubergren est. Sit sed amet magna tempor dolores lorem consetetur. Gubergren clita dolores est erat aliquyam voluptua diam nonumy amet, magna ut invidunt clita sea eirmod, diam consetetur lorem sit eos dolor nonumy et clita labore, sea diam no dolore nonumy sit ipsum ipsum dolor, takimata consetetur diam at sadipscing amet. Eirmod vero consetetur et clita labore. At et sadipscing consetetur dolore. Duo et lorem et duo diam gubergren gubergren, est dolore no sit no et erat ipsum sit takimata, justo stet clita sit rebum no magna, rebum dolor sea voluptua sadipscing justo clita est. Nonumy lorem kasd rebum amet diam dolores. Est ut amet stet amet eos et eirmod et, lorem stet sed amet sed lorem elitr magna lorem no. Et duo et accusam nonumy ea amet eirmod at at. Duo at ipsum sea gubergren. Tempor takimata et no eos dolores lorem tempor, est est diam eos ea clita dolor clita ipsum ea. Aliquyam amet stet et et et lorem rebum. Est.</p>
        <h2>Lorem Ipsum</h2>
        <p>Dolores eos sanctus erat magna at erat ea. Dolores lorem ipsum erat justo, invidunt kasd diam aliquyam sit, nonumy nonumy ipsum est amet dolore amet, at sit ipsum justo diam takimata no dolor magna. Amet no sed lorem eos sea voluptua erat tempor, eos aliquyam labore est takimata eos, dolore lorem eos justo diam. Erat clita aliquyam et ut vero. No aliquyam sanctus voluptua sit amet takimata, dolores lorem ea accusam accusam dolor elitr sed sed sed, lorem sit eos dolor ea sed rebum. Takimata dolores sed tempor gubergren sanctus ut rebum. Dolores no diam erat sadipscing aliquyam. Diam no elitr est sea lorem clita sadipscing gubergren, et ipsum at ipsum gubergren sea sed, et et lorem vero sea, amet erat voluptua dolor dolore takimata invidunt nonumy ut diam, aliquyam takimata consetetur rebum clita sea sea, sit dolor amet sea dolor dolor sadipscing consetetur et magna, dolor gubergren rebum et tempor kasd erat dolores, eirmod clita lorem eos sadipscing consetetur diam sanctus et, sadipscing sed et sea consetetur, diam dolore sed labore duo, justo eirmod consetetur rebum elitr erat dolor sanctus accusam kasd, clita rebum justo nonumy tempor dolor ut dolor amet et. Rebum et sit dolor dolores stet dolores lorem erat sanctus, elitr sit duo amet et tempor aliquyam, eos eos ipsum voluptua et ipsum sed justo sadipscing at. Kasd sit sit elitr et sadipscing duo ut nonumy. Invidunt dolor elitr ut et sit amet rebum sanctus. Voluptua clita tempor et sit nonumy, et sed lorem invidunt et gubergren. Et eirmod kasd voluptua dolores sanctus. Vero sed est justo dolor eirmod et clita et diam, rebum et dolor labore sanctus lorem sit, sanctus magna ea labore tempor amet. Elitr sed ea sit dolor dolor dolor sanctus et, stet eirmod diam et kasd voluptua gubergren. Dolor kasd eos no eos dolor vero dolor, elitr takimata stet kasd gubergren. Amet clita gubergren stet ipsum ipsum aliquyam stet dolor. Est ipsum sanctus ipsum diam dolore eirmod voluptua. Ea clita et elitr lorem ipsum, elitr erat dolores justo ipsum stet invidunt, amet erat duo ut elitr sed, labore aliquyam takimata sed sed, et dolor invidunt at diam ut no sea dolores, nonumy takimata at at magna voluptua consetetur lorem, amet est dolores nonumy duo sit sed tempor lorem. Rebum labore diam sea dolore no gubergren sanctus elitr lorem. Consetetur rebum diam sed ut consetetur dolore tempor duo, sea ea stet no amet sed dolore et kasd ipsum. Ea duo eirmod diam no invidunt lorem sadipscing. Gubergren vero vero takimata at aliquyam et diam, sadipscing sadipscing sed no sed ea vero at, at clita ea takimata et elitr. Ipsum justo et duo diam amet et. Kasd diam takimata aliquyam at sanctus kasd accusam kasd ipsum, consetetur lorem lorem aliquyam aliquyam accusam, stet kasd diam et eirmod ut magna clita et stet. At ea diam duo ipsum gubergren et rebum. Lorem at ea gubergren sea ipsum kasd. Dolor et takimata amet consetetur aliquyam labore stet duo elitr. Dolor takimata ut sit gubergren amet nonumy at.</p>
      </section>
    </div>
  );
}

export default App;
