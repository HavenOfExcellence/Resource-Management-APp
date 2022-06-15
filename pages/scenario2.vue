<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <ScenarioPage
    :scenario="2"
    title="Friend Messages you with a suspicious link:"
    nextlink="/scenario3"
  >
    <img src="~/assets/Scam2.png" />
    <h2>
      Don’t drop your “phishing antenna” just because you see a familiar persoon
      as the sender of an email. Keep looking for anything else suspicious that
      would indicate the message isn’t from the person or company it appears to
      be. Common indicators of a fake: If the email doesn’t make sense to you
      (i.e., it’s strange that your friend would send this) Spelling or grammar
      errors No explanation or normal greeting, just a sentence or two with a
      link to click The email is unexpected It’s always best to contact the
      person/company the email is purporting to be from when in doubt. For
      example, call your friend or call the company that appears to be the
      sender to ask if they actually did send you that email message. One short
      phone call could save you months of ransomware or malware remediation and
      all those associated costs.
    </h2>
  </ScenarioPage>
</template>

<script setup></script>
