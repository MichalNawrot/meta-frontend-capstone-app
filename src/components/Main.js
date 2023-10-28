const Main = () => {
    return (
        <main>
            <article>
                <h1>Article 1</h1>
                <section>
                    <h2>Section 1</h2>
                    <p>This is Main - section 1</p>

                </section>
                <section>
                    <h2>Section 2</h2>
                    <p>This is Main - section 2</p>
                    <mark><abbr>LLR</abbr></mark>
                </section>
                <hr />
            </article>
            <article>
                <h1>Article 2</h1>
                <section>
                    <p>This is Main - article 2 section 1</p>
                </section>
                <details>
                    <summary>
                        details summary
                    </summary>
                    <p>here we have some details</p>
                    <code>
                        ```python
                        import json
                        json.loads()
                        ```
                    </code>
                </details>
                <hr />
            </article>
        </main>
    );
};

export default Main;