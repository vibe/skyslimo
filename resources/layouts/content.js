export default ({title, id, children}) => (
  <section className="content" id={id}>
    <div className="title"><h1>{title}</h1></div>
    <div>{children}</div>
    <style jsx>
      {`
        .content {
          background: #ffffff;
          padding: 65px 0 20px 0
        }
        .title {
          background: #ffffff;
          box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.33);
          width: 300px;
          padding-right: 10px;
          border-right: 8px solid #1e3c72;
        }
        h1 {
          margin: 0;
          padding: 10px 0;
          color: #1e3c72;
          text-align: right;
        }
      `}
    </style>
  </section>
)
