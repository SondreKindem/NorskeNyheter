<template>
  <div class="modal-card" :class="{dark: darkMode}" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Om Norske Nyheter</p>
      <button
          type="button"
          class="delete"
          @click="$emit('close')"/>
    </header>

    <section class="modal-card-body">
      <h3 class="is-size-3">Generelt</h3>
      <p class="mb-2">
        Norske nyheter er en liten webapp som lar deg oppdage nyheter fra akkurat de nyhetskildene du selv vil se. Med
        alle nyheter samlet på ett sted slipper man å hoppe fra side til side, og fra riksnyheter, til lokalavis.
      </p>
      <p class="mb-2">
        Norske Nyheter lagrer bare titler og beskrivelser fra artiklene, og linker til artiklene på nyhetskildens
        nettside. I backenden kjøres et script som tråler for det meste avisenes rss feeds. Hvis det ikke finnes en rss
        feed, scrapes selve nettsiden.
      </p>
      <p class="mb-2">
        Applikasjonen hostes på Github pages, og kildekoden kan hentes her: <a
          href="https://github.com/SondreKindem/NorskeNyheter">https://github.com/SondreKindem/NorskeNyheter</a>
      </p>

      <h3 class="is-size-3">Fremtiden</h3>

      <div class="columns">
        <div class="column">
          <p>
            Appen er under utvikling, og jeg jobber hovedsakelig med å legge til flere nyhetskilder, utseende og
            optimalisering av siden.
          </p>
        </div>
        <div class="column">
          <h4 class="is-size-4">Planlagte nyhetskilder:</h4>
          <small class="has-text-weight-semibold">(Et lite utvalg)</small>
          <div class="columns">
            <div class="column">
              <ul class="md-list-left">
                <li><strong>TV2</strong></li>
                <li><strong>Aftenbladet</strong></li>
                <li><strong>Sunnhordland</strong></li>
                <li><strong>Adressa</strong></li>
                <li><strong>Nordlys</strong></li>
                <li><strong>Varden</strong></li>
                <li><strong>Agderposten</strong></li>
                <li><strong>DT.no</strong></li>
                <li><strong>OP.no</strong></li>
                <li><strong>Sunnmørsposten</strong></li>
                <li><strong>Budstikka</strong></li>
                <li><strong>TA.no</strong></li>
              </ul>
            </div>
            <div class="column">
              <ul>
                <li><strong>sol.no</strong></li>
                <li><strong>F-B</strong></li>
                <li><strong>Avisa Nordland</strong></li>
                <li><strong>Tønsberg Blad</strong></li>
                <li><strong>Romerikes Blad</strong></li>
                <li><strong>Fedrelandsvennen</strong></li>
                <li><strong>Haugesund Avis</strong></li>
                <li><strong>iFinnmark</strong></li>
                <li><strong>OA.no</strong></li>
                <li><strong>Hamar Arbeiderblad</strong></li>
                <li><strong>Gudbrandsdølen</strong></li>
                <li><strong>Ringeriksavisa</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="modal-card-foot"></footer>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  },
}
</script>

<style scoped>
.dark .modal-card-head {
  background-color: #1d2024;
  border-bottom: 1px solid #161a1c !important;
}

.dark .modal-card-foot {
  background-color: #1d2024;
  border-top: 1px solid #161a1c;
}

.dark .modal-card-title {
  color: var(--darkmode-text);
}

.dark .modal-card-body {
  background-color: var(--darkmode-background);
}
</style>