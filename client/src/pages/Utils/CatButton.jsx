import React from "react";
import SelectedButton from "./SelectedButton";
import NonSelectedButton from "./NonSelectedButton"



export default function CatButton({value}) {
  console.log(value.name)
  // console.log("sxdcfvgbhnjmk")
  console.log(value.selected)
  // console.log((value.name)==value.selected.categories)
  return (
    <div >
      {value.selected!=null &&
      (value.name===value.selected.categories && <SelectedButton val={value.name}/> ||
      value.name!==value.selected.categories && <NonSelectedButton val={value.name}/>)
      }

      {value.selected===null &&
      
      <NonSelectedButton val={value.name}/>
    }

      
      
    </div>
  );
}

// ${value.name===value.selected ? bg-amber-400:bg-amber-200}