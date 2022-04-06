type PersonProps = {
  name: {
    first: String;
    last: String;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};

export default Person;
