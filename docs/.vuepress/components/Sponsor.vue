<template>
  <div class="sponsor-container">
    <div class="sponsor-items">
      <div
        v-for="item in sponsor"
        :key="item.type"
        class="sponsor-item"
        :title="item.name[props.lang]"
      >
        <a
          :href="`#${item.type}`"
          :title="item.name[props.lang]"
          class="hutao-sponsor-link"
        >
          <img :src="item.icon" :alt="item.type" />
          <span>{{ item.name[props.lang] }}</span>
        </a>
      </div>
    </div>
    <div class="sponsor-detail" v-if="type && currentSponsor">
      <div class="sponsor-detail-left">
        <img
          :src="currentSponsor.icon"
          :alt="currentSponsor.name[props.lang]"
        />
        <p>{{ currentSponsor.label[props.lang] }}</p>
        <a
          v-if="currentSponsor.url"
          :href="currentSponsor.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ currentSponsor.url }}</a
        >
      </div>
      <div class="sponsor-detail-right">
        <img
          :src="currentSponsor.qrcode"
          :alt="currentSponsor.label[props.lang]"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

interface SponsorProps {
  lang: "zh" | "en";
}

const props = withDefaults(defineProps<SponsorProps>(), {
  lang: "zh",
});

enum SponsorType {
  AFDian = "afdian",
  Paypal = "paypal",
  GitHub = "github",
}

interface SponsorItem {
  icon: string;
  name: {
    zh: string;
    en: string;
  };
  type: SponsorType;
  qrcode: string;
  label: {
    zh: string;
    en: string;
  };
  url?: string;
}

const sponsor: SponsorItem[] = [
  {
    icon: "/images/202312/github-mark.svg",
    name: {
      zh: "GitHub",
      en: "GitHub",
    },
    type: SponsorType.GitHub,
    qrcode: "/images/202402/github-sponsor.png",
    label: {
      zh: "使用下方链接以通过 Github Sponsors 捐赠",
      en: "Use the link below to donate through Github Sponsors",
    },
    url: "https://github.com/sponsors/DGP-Studio",
  },
  {
    icon: "/svg/paypal.svg",
    name: {
      zh: "PayPal",
      en: "PayPal",
    },
    type: SponsorType.Paypal,
    qrcode: "/images/202402/paypal-qr.png",
    label: {
      zh: "使用下方链接以通过 PayPal 捐赠",
      en: "Use the link below to donate through PayPal",
    },
    url: "https://paypal.me/tianyu98",
  },
];

const type = ref<SponsorType>();
const currentSponsor = ref<SponsorItem>();

function updateType() {
  if (window.location.hash.slice(1)) {
    type.value = <SponsorType>window.location.hash.slice(1);
  }
  if (type.value) {
    currentSponsor.value = sponsor.find((item) => item.type === type.value);
  }
}

onMounted(() => {
  updateType();
  window.addEventListener("hashchange", updateType);
});

onBeforeUnmount(() => {
  window.removeEventListener("hashchange", updateType);
});
</script>
<style lang="css" scoped>
.sponsor-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.sponsor-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.sponsor-item {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 1px var(--card-shadow);
  padding: 4px 8px;
  text-decoration: none !important;
  user-select: none;
  font-size: 16px;
  font-weight: 600;
  text-indent: 8px;
}

.sponsor-item:hover {
  transform: translateY(-5px);
}

.hutao-sponsor-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.hutao-sponsor-link img {
  width: 24px;
  height: 24px;
}

.sponsor-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  box-shadow: 2px 2px 10px 2px var(--card-shadow);
  border-radius: 5px;
  width: calc(100% - 2rem);
  padding: 1rem;
  column-gap: 1rem;
}

.sponsor-detail-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
}

.sponsor-detail-left img {
  display: block;
  height: 5rem;
  width: 5rem;
  margin-left: 1rem;
  animation: 4s whirling linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

.sponsor-detail-left p {
  max-width: 100%;
  font-weight: 700;
  word-break: break-all;
}

.sponsor-detail-left a {
  max-width: 100%;
  word-break: break-all;
}

.sponsor-detail-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sponsor-detail-right img {
  aspect-ratio: 1;
  width: 10rem;
}

@keyframes whirling {
  from {
    transform: rotate3d(0, 1, 0, -90deg) scale(0.9);
  }

  to {
    transform: rotate3d(0, 1, 0, 90deg) scale(1);
  }
}

@media (max-width: 788px) {
  .sponsor-detail {
    flex-direction: column;
    align-items: center;
  }

  .sponsor-detail-left img {
    margin: auto;
  }

  .sponsor-detail-right img {
    margin-top: 1rem;
  }
}
</style>
