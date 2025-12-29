function Title({ title, number }) {
  return (
    <div className="flex flex-row gap-4 justify-center items-center">
      <span className="text-xl font-bold rounded-full m-1">{number}</span>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
}

export default Title;
