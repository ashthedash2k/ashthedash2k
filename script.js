function renderList(listEl, entries) {
  listEl.innerHTML = "";

  if (!entries || entries.length === 0) {
    const li = document.createElement("li");
    li.className = "empty-state";
    li.textContent = "Nothing here yet.";
    listEl.appendChild(li);
    return;
  }

  entries.forEach((post) => {
    const li = document.createElement("li");
    li.className = "post-item";

    const date = document.createElement("div");
    date.className = "post-date";
    date.textContent = post.date;

    const body = document.createElement("div");

    const title = document.createElement("h3");
    title.className = "post-title";
    const link = document.createElement("a");
    link.href = post.url;
    link.textContent = post.title;
    title.appendChild(link);

    const excerpt = document.createElement("p");
    excerpt.className = "post-excerpt";
    excerpt.textContent = post.excerpt;

    body.appendChild(title);
    body.appendChild(excerpt);

    li.appendChild(date);
    li.appendChild(body);
    listEl.appendChild(li);
  });
}

function renderPhotos(gridEl, entries) {
  gridEl.innerHTML = "";

  if (!entries || entries.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Nothing here yet.";
    gridEl.appendChild(empty);
    return;
  }

  entries.forEach((pic) => {
    const fig = document.createElement("figure");
    fig.className = "photo-item";

    const img = document.createElement("img");
    img.src = pic.src;
    img.alt = pic.caption || "";
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = pic.caption || "";

    fig.appendChild(img);
    fig.appendChild(caption);
    gridEl.appendChild(fig);
  });
}

function renderFacts(listEl, entries) {
  listEl.innerHTML = "";

  if (!entries || entries.length === 0) {
    const li = document.createElement("li");
    li.className = "empty-state";
    li.textContent = "Nothing here yet.";
    listEl.appendChild(li);
    return;
  }

  entries.forEach((fact) => {
    const li = document.createElement("li");
    li.className = "fact-item";
    li.textContent = fact;
    listEl.appendChild(li);
  });
}

renderList(document.getElementById("list-technical"), posts.technical);
renderList(document.getElementById("list-personal"), posts.personal);
renderPhotos(document.getElementById("grid-pics"), posts.pics);
renderFacts(document.getElementById("list-facts"), posts.facts);

const tabs = document.querySelectorAll(".tab");
const panels = {
  technical: document.getElementById("panel-technical"),
  personal: document.getElementById("panel-personal"),
  pics: document.getElementById("panel-pics"),
  facts: document.getElementById("panel-facts")
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => {
      const isActive = t === tab;
      t.classList.toggle("is-active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    Object.entries(panels).forEach(([key, panel]) => {
      const isActive = key === target;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});