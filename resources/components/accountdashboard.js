export default ({}) => {
  return (
    <section className="dashboard">

      <section className="dashboard-section">
        <header><h1>Personal Information</h1> <a href="#">edit</a></header>

        <ul>
          <li><span>Name:</span>Christian Franco</li>
          <li><span>Phone:</span> 7604975787</li>
          <li><span>Email:</span> contact@christianfranco.net</li>
        </ul>

      </section>
      <style jsx>
        {
          `
            .dashboard {
              padding-top: 100px;
              width: 90%;
              margin: 0 auto;
            }
        `
        }
      </style>
    </section>
  );
};
