import { useState } from "react";
import cx from 'classnames';
import { TextLogo } from "../textlogo/textlogo";
import { RouteData } from "../routedata/routeData";
import Description from "../Description";
import Search from "../Search";
import style from "./Content.module.scss";

function Content(){
  const [searchingFlag, setSearchingFlag] = useState<boolean>(false);

  return (
      <div className={style.ContentWrapper}>
        <div className={cx(style.ContentGroupWrapper,
            {[style['ContentGroupWrapper--active']]  : searchingFlag}
        )}
        >
          <TextLogo searchingFlag={searchingFlag} />
          <Description searchingFlag={searchingFlag} />
          <div className={style.SearchLayout}>
            <Search
                setSearchingFlag={setSearchingFlag}
                searchFlag={searchingFlag}
            />
          </div>
        </div>
        <RouteData
            searchingFlag={searchingFlag}
            setSearchingFlag={setSearchingFlag}
        />
      </div>
  );
}

export default Content;
