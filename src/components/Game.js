import React, { useState, useRef } from "react";

const Game = () => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const word = useRef("");
  const index = useRef(1);
  const [guessWord, setGuessWord] = useState("NOBLE");
  const [guess1, setGuess1] = useState([]);
  const [guess2, setGuess2] = useState([]);
  const [guess3, setGuess3] = useState([]);
  const [guess4, setGuess4] = useState([]);
  const [guess5, setGuess5] = useState([]);
  const [guess6, setGuess6] = useState([]);
  const handleClick = (alphabet) => {
    if (word.current.length > 4) return;
    let current = { alphabet, color: "#3a3a3c" };
    word.current = word.current + alphabet;
    if (index.current === 1) {
      const newGuess = [...guess1];
      newGuess.push(current);
      setGuess1(newGuess);
    } else if (index.current === 2) {
      const newGuess = [...guess2];
      newGuess.push(current);
      setGuess2(newGuess);
    } else if (index.current === 3) {
      const newGuess = [...guess3];
      newGuess.push(current);
      setGuess3(newGuess);
    } else if (index.current === 4) {
      const newGuess = [...guess4];
      newGuess.push(current);
      setGuess4(newGuess);
    } else if (index.current === 5) {
      const newGuess = [...guess5];
      newGuess.push(current);
      setGuess5(newGuess);
    } else if (index.current === 6) {
      const newGuess = [...guess6];
      newGuess.push(current);
      setGuess6(newGuess);
    }
  };

  const handleEnter = () => {
    console.log(index.current);
    let guess = word.current;
    if (guess.length === 5) {
      word.current = "";
      if (guess === guessWord) {
        console.log("WordFound");
        if (index.current === 1) {
          const newGuess = [...guess1];
          newGuess[0].color = "#538d4e";
          newGuess[0].border = "2px solid black";
          newGuess[1].color = "#538d4e";
          newGuess[1].border = "2px solid black";
          newGuess[2].color = "#538d4e";
          newGuess[2].border = "2px solid black";
          newGuess[3].color = "#538d4e";
          newGuess[3].border = "2px solid black";
          newGuess[4].color = "#538d4e";
          newGuess[4].border = "2px solid black";
          setGuess1(newGuess);
          alert("You win");
        } else if (index.current === 2) {
          const newGuess = [...guess2];
          newGuess[0].color = "#538d4e";
          newGuess[0].border = "2px solid black";
          newGuess[1].color = "#538d4e";
          newGuess[1].border = "2px solid black";
          newGuess[2].color = "#538d4e";
          newGuess[2].border = "2px solid black";
          newGuess[3].color = "#538d4e";
          newGuess[3].border = "2px solid black";
          newGuess[4].color = "#538d4e";
          newGuess[4].border = "2px solid black";
          setGuess2(newGuess);
        } else if (index.current === 3) {
          const newGuess = [...guess3];
          newGuess[0].color = "#538d4e";
          newGuess[0].border = "2px solid black";
          newGuess[1].color = "#538d4e";
          newGuess[1].border = "2px solid black";
          newGuess[2].color = "#538d4e";
          newGuess[2].border = "2px solid black";
          newGuess[3].color = "#538d4e";
          newGuess[3].border = "2px solid black";
          newGuess[4].color = "#538d4e";
          newGuess[4].border = "2px solid black";
          setGuess3(newGuess);
        } else if (index.current === 4) {
          const newGuess = [...guess4];
          newGuess[0].color = "#538d4e";
          newGuess[0].border = "2px solid black";
          newGuess[1].color = "#538d4e";
          newGuess[1].border = "2px solid black";
          newGuess[2].color = "#538d4e";
          newGuess[2].border = "2px solid black";
          newGuess[3].color = "#538d4e";
          newGuess[3].border = "2px solid black";
          newGuess[4].color = "#538d4e";
          newGuess[4].border = "2px solid black";
          setGuess4(newGuess);
        } else if (index.current === 5) {
          const newGuess = [...guess5];
          newGuess[0].color = "#538d4e";
          newGuess[0].border = "2px solid black";
          newGuess[1].color = "#538d4e";
          newGuess[1].border = "2px solid black";
          newGuess[2].color = "#538d4e";
          newGuess[2].border = "2px solid black";
          newGuess[3].color = "#538d4e";
          newGuess[3].border = "2px solid black";
          newGuess[4].color = "#538d4e";
          newGuess[4].border = "2px solid black";
          setGuess5(newGuess);
        } else if (index.current === 6) {
          const newGuess = [...guess6];
          newGuess[0].color = "#538d4e";
          newGuess[0].border = "2px solid black";
          newGuess[1].color = "#538d4e";
          newGuess[1].border = "2px solid black";
          newGuess[2].color = "#538d4e";
          newGuess[2].border = "2px solid black";
          newGuess[3].color = "#538d4e";
          newGuess[3].border = "2px solid black";
          newGuess[4].color = "#538d4e";
          newGuess[4].border = "2px solid black";
          setGuess6(newGuess);
        }
      } else {
        Array.from(guess).forEach((element) => {
          const status = guessWord.includes(element);
          if (status) {
            const existingAlphabetIndex = guessWord.indexOf(element);
            const guessAlbhabetIndexx = guess.indexOf(element);
            if (existingAlphabetIndex === guessAlbhabetIndexx) {
              if (index.current === 1) {
                const newGuess = [...guess1];
                newGuess[guessAlbhabetIndexx].color = "#538d4e";
                newGuess[guessAlbhabetIndexx].border = "2px solid black";
                setGuess1(newGuess);
              } else if (index.current === 2) {
                const newGuess = [...guess2];
                newGuess[guessAlbhabetIndexx].color = "#538d4e";
                newGuess[guessAlbhabetIndexx].border = "2px solid black";
                setGuess2(newGuess);
              } else if (index.current === 3) {
                const newGuess = [...guess3];
                newGuess[guessAlbhabetIndexx].color = "#538d4e";
                newGuess[guessAlbhabetIndexx].border = "2px solid black";
                setGuess3(newGuess);
              } else if (index.current === 4) {
                const newGuess = [...guess4];
                newGuess[guessAlbhabetIndexx].color = "#538d4e";
                newGuess[guessAlbhabetIndexx].border = "2px solid black";
                setGuess4(newGuess);
              } else if (index.current === 5) {
                const newGuess = [...guess5];
                newGuess[guessAlbhabetIndexx].color = "#538d4e";
                newGuess[guessAlbhabetIndexx].border = "2px solid black";
                setGuess5(newGuess);
              } else if (index.current === 6) {
                const newGuess = [...guess6];
                newGuess[guessAlbhabetIndexx].color = "#538d4e";
                newGuess[guessAlbhabetIndexx].border = "2px solid black";
                setGuess6(newGuess);
              }
              console.log(`${element} is at correct poisiton`);
            } else {
              console.log(`${element} is not`);
              if (index.current === 1) {
                const newGuess = [...guess1];
                newGuess[guessAlbhabetIndexx].color = "#b59f3b";
                newGuess[0].border = "2px solid black";
                newGuess[1].border = "2px solid black";
                newGuess[2].border = "2px solid black";
                newGuess[3].border = "2px solid black";
                newGuess[4].border = "2px solid black";
                setGuess1(newGuess);
              } else if (index.current === 2) {
                const newGuess = [...guess2];
                newGuess[guessAlbhabetIndexx].color = "#b59f3b";
                newGuess[0].border = "2px solid black";
                newGuess[1].border = "2px solid black";
                newGuess[2].border = "2px solid black";
                newGuess[3].border = "2px solid black";
                newGuess[4].border = "2px solid black";
                setGuess2(newGuess);
              } else if (index.current === 3) {
                const newGuess = [...guess3];
                newGuess[guessAlbhabetIndexx].color = "#b59f3b";
                newGuess[0].border = "2px solid black";
                newGuess[1].border = "2px solid black";
                newGuess[2].border = "2px solid black";
                newGuess[3].border = "2px solid black";
                newGuess[4].border = "2px solid black";
                setGuess3(newGuess);
              } else if (index.current === 4) {
                const newGuess = [...guess4];
                newGuess[guessAlbhabetIndexx].color = "#b59f3b";
                newGuess[0].border = "2px solid black";
                newGuess[1].border = "2px solid black";
                newGuess[2].border = "2px solid black";
                newGuess[3].border = "2px solid black";
                newGuess[4].border = "2px solid black";
                setGuess4(newGuess);
              } else if (index.current === 5) {
                const newGuess = [...guess5];
                newGuess[guessAlbhabetIndexx].color = "#b59f3b";
                newGuess[0].border = "2px solid black";
                newGuess[1].border = "2px solid black";
                newGuess[2].border = "2px solid black";
                newGuess[3].border = "2px solid black";
                newGuess[4].border = "2px solid black";
                setGuess5(newGuess);
              } else if (index.current === 6) {
                const newGuess = [...guess6];
                newGuess[guessAlbhabetIndexx].color = "#b59f3b";
                newGuess[0].border = "2px solid black";
                newGuess[1].border = "2px solid black";
                newGuess[2].border = "2px solid black";
                newGuess[3].border = "2px solid black";
                newGuess[4].border = "2px solid black";
                setGuess6(newGuess);
                console.log("Game over");
              }
            }
          } else {
            console.log(`${element} not present in the word`);
            if (index.current === 1) {
              const newGuess = [...guess1];
              newGuess[0].border = "2px solid black";
              newGuess[1].border = "2px solid black";
              newGuess[2].border = "2px solid black";
              newGuess[3].border = "2px solid black";
              newGuess[4].border = "2px solid black";
              setGuess1(newGuess);
            } else if (index.current === 2) {
              const newGuess = [...guess2];
              newGuess[0].border = "2px solid black";
              newGuess[1].border = "2px solid black";
              newGuess[2].border = "2px solid black";
              newGuess[3].border = "2px solid black";
              newGuess[4].border = "2px solid black";
              setGuess2(newGuess);
            } else if (index.current === 3) {
              const newGuess = [...guess3];
              newGuess[0].border = "2px solid black";
              newGuess[1].border = "2px solid black";
              newGuess[2].border = "2px solid black";
              newGuess[3].border = "2px solid black";
              newGuess[4].border = "2px solid black";
              setGuess3(newGuess);
            } else if (index.current === 4) {
              const newGuess = [...guess4];
              newGuess[0].border = "2px solid black";
              newGuess[1].border = "2px solid black";
              newGuess[2].border = "2px solid black";
              newGuess[3].border = "2px solid black";
              newGuess[4].border = "2px solid black";
              setGuess4(newGuess);
            } else if (index.current === 5) {
              const newGuess = [...guess5];
              newGuess[0].border = "2px solid black";
              newGuess[1].border = "2px solid black";
              newGuess[2].border = "2px solid black";
              newGuess[3].border = "2px solid black";
              newGuess[4].border = "2px solid black";
              setGuess5(newGuess);
            } else if (index.current === 6) {
              const newGuess = [...guess6];
              newGuess[0].border = "2px solid black";
              newGuess[1].border = "2px solid black";
              newGuess[2].border = "2px solid black";
              newGuess[3].border = "2px solid black";
              newGuess[4].border = "2px solid black";
              setGuess6(newGuess);
            }
          }
        });
        if (index.current === 6 && guess !== guessWord) {
          alert("Game Over");
        }
        console.log("wrong word");
      }
      index.current = index.current + 1;
    } else {
      console.log("less word");
    }
    // index.current = index.current + 1;
  };

  const handleDelete = () => {
    console.log("Delete clicled");
    let cur = word.current;
    let current = cur.slice(0, -1);
    word.current = current;
    console.log(word.current);
    if (index.current === 1) {
      const newGuess = [...guess1];
      newGuess.pop();
      setGuess1(newGuess);
    } else if (index.current === 2) {
      const newGuess = [...guess2];
      newGuess.pop();
      setGuess2(newGuess);
    } else if (index.current === 3) {
      const newGuess = [...guess3];
      newGuess.pop();
      setGuess3(newGuess);
    } else if (index.current === 4) {
      const newGuess = [...guess4];
      newGuess.pop();
      setGuess4(newGuess);
    } else if (index.current === 5) {
      const newGuess = [...guess5];
      newGuess.pop();
      setGuess5(newGuess);
    } else if (index.current === 6) {
      const newGuess = [...guess6];
      newGuess.pop();
      setGuess6(newGuess);
    }
  };
  return (
    <>
      <div className="board">
        {/* Container Rows */}
        <div className="board-rows">
          {Array.from(Array(5)).map((_, index) => {
            return (
              <div
                key={index}
                className="row-cells"
                style={{
                  backgroundColor: guess1[index]?.color ?? "#3a3a3c",
                  border: guess1[index]?.border ?? "2px solid grey",
                }}
              >
                {guess1[index]?.alphabet}
              </div>
            );
          })}
        </div>
        <div className="board-rows">
          {Array.from(Array(5)).map((_, index) => {
            return (
              <div
                key={index}
                className="row-cells"
                style={{
                  backgroundColor: guess2[index]?.color ?? "#3a3a3c",
                  border: guess2[index]?.border ?? "2px solid grey",
                }}
              >
                {guess2[index]?.alphabet}
              </div>
            );
          })}
        </div>
        <div className="board-rows">
          {Array.from(Array(5)).map((_, index) => {
            return (
              <div
                key={index}
                className="row-cells"
                style={{
                  backgroundColor: guess3[index]?.color ?? "#3a3a3c",
                  border: guess3[index]?.border ?? "2px solid grey",
                }}
              >
                {guess3[index]?.alphabet}
              </div>
            );
          })}
        </div>
        <div className="board-rows">
          {Array.from(Array(5)).map((_, index) => {
            return (
              <div
                key={index}
                className="row-cells"
                style={{
                  backgroundColor: guess4[index]?.color ?? "#3a3a3c",
                  border: guess4[index]?.border ?? "2px solid grey",
                }}
              >
                {guess4[index]?.alphabet}
              </div>
            );
          })}
        </div>
        <div className="board-rows">
          {Array.from(Array(5)).map((_, index) => {
            return (
              <div
                key={index}
                className="row-cells"
                style={{
                  backgroundColor: guess5[index]?.color ?? "#3a3a3c",
                  border: guess5[index]?.border ?? "2px solid grey",
                }}
              >
                {guess5[index]?.alphabet}
              </div>
            );
          })}
        </div>
        <div className="board-rows">
          {Array.from(Array(5)).map((_, index) => {
            return (
              <div
                key={index}
                className="row-cells"
                style={{
                  backgroundColor: guess6[index]?.color ?? "#3a3a3c",
                  border: guess6[index]?.border ?? "2px solid grey",
                }}
              >
                {guess6[index]?.alphabet}
              </div>
            );
          })}
        </div>

        {/* Container rows */}
      </div>
      <div className="keyboard">
        {/* First row */}
        <div>
          {row1.map((alphabet, index) => {
            return (
              <button
                onClick={() => {
                  handleClick(alphabet);
                }}
                key={index}
                className="keyBoardButton"
              >
                {alphabet}
              </button>
            );
          })}
        </div>

        {/* Second row */}
        <div style={{ display: "flex" }}>
          {row2.map((alphabet, index) => {
            return (
              <button
                onClick={() => {
                  handleClick(alphabet);
                }}
                key={index}
                className="keyBoardButton"
              >
                {alphabet}
              </button>
            );
          })}
        </div>

        {/* Third row */}
        <div style={{ display: "flex" }}>
          <button
            style={{
              width: "4rem",
              padding: "8px",
              backgroundColor: "#818384",
              color: "white",
              margin: "2px",
              border: "none",
              outline: "none",
              fontWeight: "bold",
              borderRadius: "2px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={handleEnter}
          >
            Enter
          </button>
          <div style={{ display: "flex" }}>
            {row3.map((alphabet, index) => {
              return (
                <button
                  onClick={() => {
                    handleClick(alphabet);
                  }}
                  className="keyBoardButton"
                  key={index}
                >
                  {alphabet}
                </button>
              );
            })}
          </div>
          <button
            style={{
              width: "3rem",
              padding: "8px",
              backgroundColor: "#818384",
              color: "white",
              margin: "2px",
              border: "none",
              outline: "none",
              fontWeight: "bold",
              borderRadius: "2px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="game-icon"
              data-testid="icon-backspace"
            >
              <path
                fill="var(--color-tone-1)"
                d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Game;
