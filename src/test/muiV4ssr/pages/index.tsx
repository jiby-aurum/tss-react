import Head from "next/head";
import { GlobalStyles } from "tss-react";
import { makeStyles, useStyles } from "../shared/makeStyles";
import Button from "@material-ui/core/Button"
import { StylesProvider } from "@material-ui/core/styles";

export default function Home() {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StylesProvider injectFirst>
                <Root />
            </StylesProvider>
        </>
    );
}

function Root() {

    const { css } = useStyles();

    return (
        <App
            className={css({ "boxShadow": "10px 5px 5px teal" })}
        />
    );

}

const { App } = (() => {

    const useStyles = makeStyles()(theme => ({
        "root": {
            "& > h1:nth-child(2)": {
                "color": theme.limeGreen,
            },
        },
        "ovStyled": {
            "color": "darkred"
        },
        "ovInternal": {
            "backgroundColor": "darkblue"
        }
    }));

    function App(props: { className?: string; }) {
        const { className } = props;
        const { classes, css, cx } = useStyles();

        return (
            <>
                <GlobalStyles
                    styles={{
                        "body": {
                            "backgroundColor": "pink"
                        },
                        ".foo": {
                            "color": "cyan"
                        }
                    }}
                />
                <div className={classes.root}>
                    <h1>Black</h1>
                    <h1>Should be lime green</h1>
                    <h1
                        className={cx(
                            css({ "border": "1px solid black" }),
                            className
                        )}
                    >
                        Black, should have border and shadow
                    </h1>
                    <h1 className="foo">Should be cyan</h1>
                    <Button variant="contained" color="secondary"> Background should be deep pink </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.ovInternal}
                    >
                        Background should be dark blue
                    </Button>
                </div>
            </>
        );
    }

    return { App };

})();

