import AddNewsForm from "../../../components/forms/AddNewsForm";

const AddNews = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto max-w-screen-2xl pb-16">
      {/* Page Header */}
      <div className="text-center mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-widest">
          Add News 📰
        </h1>
        <h3 className="mt-2 text-lg md:text-xl lg:text-2xl font-semibold underline underline-offset-2 tracking-widest">
          Share The Latest Updates By Publishing <br /> A Newspaper
        </h3>
      </div>
      {/* News Form */}
      <div className="mt-8">
        <AddNewsForm />
      </div>
    </div>
  );
};

export default AddNews;
