import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Search: React.FC = () => {
  const isMatch = useMediaQuery({ query: "(min-width: 600px)" });

  const [res, setRes] = useState<any>({});
  const [post, setPost] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [searchDirty, setSearchDirty] = useState<boolean>(false);
  const [searchError, setSearchError] = useState<string>(
    "Поля не может быть пустым, кнопка заблокировано... "
  );
  const [formValid, setFormvalid] = useState(false);

  useEffect(() => {
    if (searchError) {
      setFormvalid(false);
    } else {
      setFormvalid(true);
    }
  }, [searchError]);

  useEffect(() => {
    let url =
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    let token = "4f78c72e0cf1c114c58b69a7b48574cc25e13bb2";

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: search }),
    })
      .then((response) => response.json())
      .then((response) => setRes(response.suggestions))
      //.then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, [post]);
  console.log(res);

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "search":
        setSearchDirty(true);
        break;
    }
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (event.target.value.length < 3) {
      setSearchError(
        "Минимальная длина ввода в поле ввода адреса - 3 символа, кнопка заблокировано..."
      );
    } else {
      setSearchError("");
    }
  };
  return (
    <div>
      <h2>Поиск адресов</h2>
      <p>Введите интерисующий вас адрес</p>

      <div className="search_div">
        <div className="text_box">
          <input
            value={search}
            onChange={(e) => searchHandler(e)}
            className="text_box_input"
            type="text"
            placeholder="Введите интерисующий вас адрес"
            name="search"
            onBlur={(e) => blurHandler(e)}
          />
        </div>
        <div className="text_box_button">
          <button
            disabled={!formValid}
            className="button"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              setPost(post + 1);
            }}
          >
            <div className={isMatch ? "appbar_icon" : "d_none"}>
              <img className="lupa" src="lupa2.PNG" alt="" />
            </div>{" "}
            Поиск
          </button>
        </div>
      </div>
      <div className="er">
        {searchDirty && searchError && <p>{searchError}</p>}
      </div>
      <div className="result_div">
        <div className="result_div_under">
          <h2>
            Адреса <a className="red">Стажеры не нужны? </a>{" "}
          </h2>
        </div>

        {post ? (
          res.map((list: any) => (
            <div className="result_div_under" key={list.value}>
              <p className="result_div_under_p">
                {/* {list.data.region_type_full} {list.data.region},
                {list.data.street_type_full}
                {list.data.street}
                {list.data.house},{list.value} */}
                {list.value}
              </p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Search;
