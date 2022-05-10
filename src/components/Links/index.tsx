import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { shortenApi } from "configs/api";
import { useEffect, useState } from "react";
import { Container } from "./styles";

type Links = {
  full: string;
  short: string;
};

type apiData = {
  result: {
    original_link: string;
    short_link: string;
  };
};

export const Links = () => {
  const [newLink, setNewLink] = useState("");

  const [isFetchNewLink, setIsFetchNewLink] = useState(false);

  const [inputWarning, setInputWarning] = useState(false);

  const [linksList, setLinksList] = useState<Links[]>([]);

  const [isFetchLinks, setIsFetchLinks] = useState(true);

  const [copyAlert, setCopyAlert] = useState(false);

  // fetchLinks
  useEffect(() => {
    let links = localStorage.getItem("links") as string;

    let linksArray = JSON.parse(links) as Links[];

    if (!links) {
      localStorage.setItem("links", JSON.stringify(linksList));
    }

    setLinksList(linksArray);
    setIsFetchLinks(false);
  }, []);

  useEffect(() => {
    if (linksList.length > 0) {
      localStorage.setItem("links", JSON.stringify(linksList));
    }
  }, [linksList]);

  const handleShortLink = async () => {
    if (newLink.length > 0) {
      setIsFetchNewLink(true);
      setInputWarning(false);

      await shortenApi
        .post<apiData>(`/shorten?url=${newLink}`)
        .then(({ data }) => {
          setLinksList([
            ...linksList,
            {
              full: data.result.original_link,
              short: data.result.short_link,
            },
          ]);

          setIsFetchNewLink(false);
        });
    } else {
      setInputWarning(true);
    }
  };

  const handleCopyShort = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopyAlert(true);
  };

  return (
    <Container>
      <div
        className={`inputContainer ${
          inputWarning && newLink.length === 0 && "warning"
        }`}
      >
        <input
          type="text"
          placeholder="Shorthen a link here..."
          onChange={(e) => setNewLink(e.target.value)}
        />

        <button
          onClick={handleShortLink}
          disabled={isFetchNewLink ? true : false}
        >
          {isFetchNewLink ? (
            <CircularProgress size={32} color="inherit" />
          ) : (
            "Shorthen it!"
          )}
        </button>
      </div>

      <ul>
        {isFetchLinks ? (
          <CircularProgress className="spinner" color="inherit" />
        ) : (
          linksList.map((item, index) => {
            return (
              <li key={index}>
                <div className="link">
                  <p>{item.full}</p>
                  <a
                    href={`https://${item.short}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.short}
                  </a>
                </div>

                <button onClick={() => handleCopyShort(item.short)}>
                  Copy
                </button>
              </li>
            );
          })
        )}
      </ul>

      <Snackbar
        open={copyAlert}
        autoHideDuration={4000}
        onClose={() => setCopyAlert(false)}
      >
        <Alert
          onClose={() => setCopyAlert(false)}
          severity="info"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Copiado para área de trabalho
        </Alert>
      </Snackbar>
    </Container>
  );
};
