interface ResultPanelProps {
  summary?: string
  agent?: string
}

export function ResultPanel({ summary, agent }: ResultPanelProps) {
  return (
    <section aria-label="Result Panel">
      <h2>Result</h2>
      {summary ? (
        <>
          <p>{summary}</p>
          {agent ? <p>{agent}</p> : null}
        </>
      ) : (
        <p>No result yet.</p>
      )}
    </section>
  )
}
