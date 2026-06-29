// The chip buttons above the input bar
// Clicking one calls sendMessage() with the chip label as text

function QuickReplies({ chips, onChipClick }) {
  if (!chips || chips.length === 0) return null; // hide if no chips

  return (
    <div className="quick-replies">
      {chips.map((chip, i) => (
        <button
          key={i}
          className="chip"
          onClick={() => onChipClick(chip)}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}

export default QuickReplies;