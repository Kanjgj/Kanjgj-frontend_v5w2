

const FormPage = () => {
  return (
    ` <main class="container">
      <section class="card">
      <header class="header">
        <h1>IssueHub Mini</h1>
        <p class="muted">
          En minimal frontend för att öva GitHub Flow med Issues och Pull Requests.
        </p>
        
        <header></header>

        <div class="toolbar">
          <input id="filterInput" type="search" placeholder="Filtrera tasks..." />
          <button id="seedBtn" class="btn secondary" type="button">Lägg till demo-data</button>
        </div>

        <form id="taskForm" class="form">
          <label class="label" for="taskTitle">Titel</label>
          <input id="taskTitle" class="input" type="text" placeholder="t.ex. Skapa en PR" required />

          <label class="label" for="taskTag">Tag</label>
          <select id="taskTag" class="input">
            <option value="feature">feature</option>
            <option value="bug">bug</option>
            <option value="docs">docs</option>
            <option value="chore">chore</option>
          </select>

          <button class="btn" type="submit">Lägg till</button>
        </form>

        <div class="split">
          <section>
            <h2>Backlog</h2>
            <ul id="backlogList" class="list"></ul>
          </section>

          <section>
            <h2>Done</h2>
            <ul id="doneList" class="list"></ul>
          </section>
        </div>

        <footer class="footer">
          <small>Made for GitHub Flow practice ✨</small>
        </footer>
      </section>
    </main>`
  );
}


export default FormPage;
