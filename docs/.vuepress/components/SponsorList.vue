<template>
  <div class="sl-container">
    <a v-for="(item, index) in sponsors" :key="index" :href="item.link" target="_blank" :title="item.name"
      class="sl-item">
      <img class="sl-image" :src="item.icon" :alt="item.name" />
    </a>
  </div>
</template>
<script lang="ts" setup>
interface SponsorListItem {
  icon: string;
  name: string;
  link: string;
}

const sponsors: SponsorListItem[] = [
  { icon: "/svg/netlify.svg", name: "Netlify", link: "https://www.netlify.com" },
  {
    icon: "/svg/crowdin-core-logo-cDark.svg",
    name: "Crowdin",
    link: "https://crowdin.com",
  },
  { icon: "/svg/navicat.svg", name: "Navicat", link: "https://www.navicat.com" },
  { icon: "/svg/signpath.svg", name: "Signpath", link: "https://about.signpath.io" },
  { icon: "/svg/1Password.svg", name: "1Password", link: "https://1password.com" },
  {
    icon: "/svg/digitalocean.svg",
    name: "Digitalocean",
    link: "https://www.digitalocean.com",
  },
  { icon: "/svg/ducalis.svg", name: "Ducalis", link: "https://hi.ducalis.io" },
  { icon: "/svg/jetbrains.svg", name: "Jetbrains", link: "https://jetbrains.com" },
  { icon: "/svg/termius-logo.svg", name: "Termius", link: "https://termius.com" },
];
</script>
<style lang="css" scoped>
.sl-container {
  margin: auto;
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 1rem;
  background: #f8f8f8;
  border-radius: 5px;
  padding: 15px;

  a.sl-item::after {
    display: none !important;
  }
}

.sl-item {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
  background: #e1e1e1;
  padding: 10px;
  border-radius: 5px;
}

.sl-image {
  aspect-ratio: 3/1;
  max-width: 180px;
}

html[data-theme="dark"] {
  .sl-container {
    background: #8f8f8f;
  }
}
</style>
