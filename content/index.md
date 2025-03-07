---
title: "My Blog Posts"
date: 2024-03-15
draft: false
layout: "blogs"
---

# Latest Blog Posts

{{ range .Site.Params.blogs }}
<div class="blog-entry">
<p class="text-gray-400 text-sm">{{ .date }}</p>
<a href="{{ .link }}" class="text-blue-400 hover:text-blue-300 text-xl font-medium">{{ .title }}</a>
<p class="text-gray-400 mt-2">{{ .summary }}</p>
<div class="mt-2 mb-6">
{{ range .tags }}
<span class="text-gray-400 text-sm">#{{ . }}</span>
{{ end }}
</div>
</div>
{{ end }} 