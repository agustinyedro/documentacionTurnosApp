---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Maximiliano Pedano',
    title: 'Creador',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Nuestro equipo
    </template>
    <template #lead>
      El desarrollo de VitePress está guiado por un equipo internacional,
      Algunos de los miembros han elegido aparecer a continuación.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
