import { useEffect, useState } from "react";

function MyList({ list, handleRemove }) {

    console.log('cart', list)

  return (
    <section className="my-list-wrapper">
      {list.map((item) => {
       return item.inCart > 0 ? (
          <div>
            <div
              onClick={() => {
                handleRemove(item);
              }}
            >
              <i class="fas fa-minus"></i>
            </div>
            <span>{item.item}</span>
            <span>${item.price}</span>
          </div>
        ) : (
          ""
        );
      })}
    </section>
  );
}

export default MyList;
