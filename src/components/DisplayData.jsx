import React from "react";

const arrayObject = [
  {
    id: 1,
    name: "jai",
    address: { city: "indore", extra: { location: "near south" } }
  },
  { id: 2, name: "Sri", address: { city: "Srikakulam" } },
  { id: 3, name: "srinika" }
];

export const DisplayData = () => {
  return (
    <div>
      {arrayObject.map((item) => (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Name: {item.name}</p>
          {item.address ? <p>city:{item.address.city}</p> : <div></div>}
          {item.address?.extra ? (
            <p>Location: {item.address.extra.location}</p>
          ) : (
            <p></p>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};
