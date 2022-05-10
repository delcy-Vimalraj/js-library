document.body.style.fontFamily = "Roboto Slab";
document.body.style.backgroundColor = "azure";
// Header
let line1 = document.createElement("hr");
line1.style.width = "100%";
document.body.appendChild(line1);
const header = document.createElement("h1");
header.innerText = "LIBRARY MANAGEMENT";
header.style.fontStyle = "italic";
header.style.textAlign = "center";
document.body.appendChild(header);
line1 = document.createElement("hr");
line1.style.width = "100%";
document.body.appendChild(line1);

// Image

const bg = document.createElement("img");
bg.setAttribute("src", "https://www.apa.org/images/books-tile_tcm7-281253.jpg");
bg.style.width = "100%";
bg.style.height = "80vh";
document.body.appendChild(bg);

// intro
line1 = document.createElement("hr");
line1.style.width = "100%";
document.body.appendChild(line1);
let h2 = document.createElement("h2");
h2.innerText = "LIBRARY MANAGEMENT";
h2.style.textDecoration = "underline";
document.body.appendChild(h2);
para1 = document.createElement("p");
para1.style.textAlign = "justify";
para1.innerHTML = `<h3>Library Management is the adaptation of the principles and techniques of
management to the library situation. It includes decision making and getting
the work done by others. The five fundamental management functions are:
Planning, Organizing, Staffing, Leading and Controlling.</h3>`;
document.body.appendChild(para1);
let table = document.createElement("table");
table.innerHTML = `<tr>
<td>
    <p>Management refers to series of functions for the organization and administration of various
        activities and people
        in the organization. Management is essential for all types of organization and libraries are no
        exception.
        Libraries had very limited financial resources and limited services. Now libraries exist in
        great
        variety. These
        vary in size, goals, structural pattern, financial resources, staff and many other
        characteristics.
        From
        management point of view, these very in management style, morale of the staff, environment for
        innovation, etc.
        Now a variety of information and communication technologies are available as means to improve
        library services
        and operations.Library management textbooks in the United States primarily discuss the purpose
        of
        library
        management, its principles, history, management theories, and organisations. A notable
        characteristic of library
        management theories is that they primarily used management theories meant for commercial
        organisations to
        describe themselves. It can be observed that the management theories developed for business
        organisations and
        the management theories developed for libraries make up the majority, and the largest percentage
        are
        those aimed
        at business organisations </p>
</td>
<td>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTaGh1lJLGfgPng3kXOyoDQwOMR-4EUUhgKEHOCSgphbwVSbYHnLUoyMYau2nMvFq2MM&usqp=CAU"
        alt="">
</td>
</tr>`;
document.body.appendChild(table);

line1 = document.createElement("hr");
line1.style.width = "100%";
document.body.appendChild(line1);

// Categories

h2 = document.createElement("h2");
h2.innerText = "categories";
h2.style.textDecoration = "underline";
h2.style.fontStyle = "italic";
document.body.appendChild(h2);

let ul = document.createElement("ul");
[
  {
    title: "FICTION BOOK",
    url: "#fiction",
  },
  {
    title: "NON-FICTION BOOK",
    url: "#nonfiction",
  },
].forEach((category) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", category.url);
  a.innerText = category.title;
  li.appendChild(a);
  ul.appendChild(li);
});
document.body.appendChild(ul);

// para 2
table = document.createElement("table");
table.innerHTML = `<tr>
<td><img src="https://en.unesco.org/sites/default/files/styles/img_688x358/public/bookday2021_quote_en.png?itok=INy6EW87"
        alt="" width="250" height="130px"></td>
<td>
    <p>
        One can see that citations of management theories meant for commercial organisations increased
        greatly between
        the first edition (1977) and the fifth edition (1998). Management theories developed for
        libraries
        were also
        cited increasingly between the first edition (1977) and the sixth edition (2002). Though both
        the
        theories meant
        for commercial organisations and those meant for the libraries have been cited less in the
        seventh
        edition
        (2007) of the library management textbook, this is due to a change in the editorial policy.

        Management theories intended for non-profit organisations were cited much less often than other
        management
        theories. By comparing the rate at which they are being cited, we can see that between the first
        edition (1977)
        and the fourth edition (1993), there has been an increase in the rate of citations for
        management
        theories
        concerning commercial organisations. Since the fifth edition (1998), there has also been a
        decline
        in the number
        of citations of management theories meant for commercial organisations. However, this does not
        change the fact
        that the overall trend has been that management theories designed for commercial organisations
        have
        been cited
        with greater frequency than the others
    </p>
</td>
</tr>`;
document.body.appendChild(table);

list_of_books = document.createElement("h2");
list_of_books.innerText = "LIST OF BOOKS";
list_of_books.style.textDecoration = "underline";
document.body.appendChild(list_of_books);

outer_table = document.createElement("table");
let inner_table = document.createElement("table");
inner_table.innerHTML = `<thead>
<tr bgcolor="cyan">
  <td id="fiction">Fiction</td>
  <td id="nonfiction">Nonfiction</td>
</tr>
</thead>`;
let i = 1;
[
  {
    fiction: "Action and adventure",
    nonfiction: "Art/architecture",
  },
  {
    fiction: "Alternate history",
    nonfiction: "Autobiography",
  },
  {
    fiction: "Anthology",
    nonfiction: "Biography",
  },
  {
    fiction: "Chick lit",
    nonfiction: "Business/economics",
  },
  {
    fiction: "Children's",
    nonfiction: "Crafts/hobbies",
  },
  {
    fiction: "Classic",
    nonfiction: "Cookbook",
  },
  {
    fiction: "Comic book",
    nonfiction: "Diary",
  },
  {
    fiction: "Coming-of-age",
    nonfiction: "Dictionary",
  },
  {
    fiction: "Crime",
    nonfiction: "Encyclopedia",
  },
  {
    fiction: "Drama",
    nonfiction: "Guide",
  },
  {
    fiction: "Fairytale",
    nonfiction: "Health/fitness",
  },
  {
    fiction: "Fantasy",
    nonfiction: "History",
  },
  {
    fiction: "Graphic novel",
    nonfiction: "Home and garden",
  },
  {
    fiction: "Historical fiction",
    nonfiction: "Humor",
  },
  {
    fiction: "Horror",
    nonfiction: "Journal",
  },
  {
    fiction: "Mystery",
    nonfiction: "Math",
  },
  {
    fiction: "Paranormal romance",
    nonfiction: "Memoir",
  },
  {
    fiction: "Picture book",
    nonfiction: "Philosophy",
  },
  {
    fiction: "Poetry",
    nonfiction: "Prayer",
  },
  {
    fiction: "Political thriller",
    nonfiction: "Religion, spirituality, and new age",
  },
  {
    fiction: "Romance",
    nonfiction: "Textbook",
  },
  {
    fiction: "Satire",
    nonfiction: "True crime",
  },
  {
    fiction: "Science fiction",
    nonfiction: "Review",
  },
  {
    fiction: "Short story",
    nonfiction: "Science",
  },
  {
    fiction: "Suspense",
    nonfiction: "Self help",
  },
  {
    fiction: "Thriller",
    nonfiction: "Sports and leisure",
  },
  {
    fiction: "Western",
    nonfiction: "Travel",
  },
  {
    fiction: "Young adult",
    nonfiction: "True crime",
  },
].forEach((category) => {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.innerText = category.fiction;
  td2.innerText = category.nonfiction;
  tr.appendChild(td1);
  tr.appendChild(td2);
  inner_table.appendChild(tr);
  if (i % 2 == 0) {
    td1.style.backgroundColor = "#CCEEFF";
  } else {
    td2.style.backgroundColor = "#CCEEFF";
  }
  i++;
  tr.style.height = "65px";
});
inner_table.style.border = "1px solid black";
let tr = document.createElement("tr");
let td = document.createElement("td");
td.appendChild(inner_table);
tr.appendChild(td);

td = document.createElement("td");

let h3 = document.createElement("h3");
h3.innerText = `Do you have a favorite type of book, either fiction or nonfiction? Are you thinking about branching out and enjoying a new genre? If so, a list of book types or genres can help you choose what to read next. See if any of the below subtypes catch your eye.`;
td.appendChild(h3);
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://assets.ltkcontent.com/images/31018/book-genres_0066f46bde.jpg"
);
let div = document.createElement("div");
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.appendChild(img);
td.appendChild(div);

[
  {
    title: "Two Different Types of Books",
    desc: `All books are classified as either fiction or nonfiction. Within
        these two types of books, you’ll find dozens of more specific types,
        or genres.`,
  },
  {
    title: "Nonfiction Books",
    desc: `Nonfiction books contain factual information, such as biographies
        and history books.`,
  },
  {
    title: "Examples of nonfiction books include:",
    desc: `<ul>
        <li>
          Most biographies are nonfiction. We say "most" biographies,
          because a biography of a fictional character is really a
          fictional book.
        </li>
        <li>
          The Diary of Anne Frank is nonfiction and a journal, making it a
          nonfiction journal.
        </li>
        <li>
          Most Dictionaries and encyclopedias are nonfiction because they
          contain facts about words.
        </li>
        <li>Travel books such as an atlas are nonfiction.</li>
      </ul>`,
  },
  {
    title: `Fiction Books`,
    desc: `Fiction books contain a story that the author made up, such as
        romance or children's books. The most commonly read works are works
        of fiction. Perhaps some of their elements are based on hints of
        truth, but they have been elaborated, fabricated, and used to
        embellish into a new story.`,
  },
  {
    title: "Some examples of classic fiction books are :",
    desc: `<ul>
        <li>The Sun Also Rises by Ernest Hemingway</li>
        <li>To Kill A Mockingbird by Harper Lee</li>
        <li>Their Eyes Were Watching God by Zora Neale Hurston</li>
      </ul>`,
  },
  {
    title: "Popular Nonfiction Book Genres Explained",
    desc: `Adult and children’s nonfiction genres are more popular than you
        might imagine. These are five of the most popular nonfiction genres
        according to book sales.`,
  },
  {
    title: "Food",
    desc: `Nonfiction food books include cookbooks, but more modern food books
        encompass everything from specific cooking elements and ingredients
        to specialized diets. You’ll find classic cookbooks with recipes and
        books that are part memoir/autobiography and part cookbook.
        Mastering the Art of French Cooking by Julia Child is an example of
        a popular food book.`,
  },
  {
    title: "History",
    desc: `Nonfiction history books include any books that lay out the known
        facts about a particular, time, culture, or event in history.
        Killing England by Bill O’Reilly and Martin Dugard is an example of
        a popular history book`,
  },
  {
    title: "Memoir",
    desc: `Memoirs are one type of autobiography. In this type of book, the
        author puts emphasis on specific moments or events that brought
        about specific life lessons. A popular example of a memoir is
        Becoming by Michelle Obama.`,
  },
  {
    title: "Politics",
    desc: `Political nonfiction books can include books written by career
        politicians, books that explore political systems, or books that
        discuss the politics of a certain period. A Promised Land by Barack
        Obama is an example of political nonfiction.`,
  },
  {
    title: "Popular Fiction Book Genres Explained",
    desc: `Most adult fiction is categorized as general fiction, while a large
        portion of children’s books are classified as fiction. The
        popularity of genres changes over time, but these genres rarely lose
        popularity.`,
  },
  {
    title: "Young Adult",
    desc: `Young adult fiction is written for readers ages 12 to 18. They
        incorporate the typical reading level and worldview of tweens and
        teens in this age group. The Hunger Games series by Suzanne Collins
        is an example of popular young adult fiction.`,
  },
  {
    title: "Children’s Books",
    desc: `children’s fiction is often called children’s literature or juvenile
        fiction. Books in this genre are written with readers under the age
        of 12 in mind. Types of children’s books include picture books and
        chapter books. Classic Dr. Seuss books like Green Eggs and Ham are
        examples of children’s fiction.`,
  },
].forEach((params) => {
  h2 = document.createElement("h2");
  h2.innerHTML = params.title;
  h2.style.textDecoration = "underline";
  td.appendChild(h2);
  let p = document.createElement("p");
  p.innerHTML = params.desc;
  td.appendChild(p);
});

tr.appendChild(td);
outer_table.appendChild(tr);
document.body.appendChild(outer_table);

div = document.createElement("div");
div.innerHTML = `<h2>For more information just watching the following videos</h2>
<table>
  <tr>
    <td>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/8f-1TphcQ_Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </td>
    <td>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9g3EmLk-PoU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </td>
  </tr>
</table>
`;
document.body.appendChild(div);
const footer = document.createElement("div");
footer.innerHTML = `<b>FOR MORE BOOK</b>
<a href="https://www.amazon.in/Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books"><img
src="http://www.clker.com/cliparts/L/A/y/P/z/V/search-button-hi.png"
alt=""
width="5%"
height="25px"
/></a>
<br /><br />
<hr />
<br /><br />
<center>
  <b><i>Created by @ Delcy</i></b>
</center>
<br /><br />
<hr />
<br />`;
document.body.appendChild(footer);
