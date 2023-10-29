const shareButtons = document.querySelectorAll('.tile__share-button')
console.log(shareButtons);

async function copyText(e) {
  e.preventDefault()
  const link = this.getAttribute('link')
  console.log(link);
  try {
    await navigator.clipboard.writeText(link)
    alert("Copied the link.")
  } catch (error) {
    console.error(error);
  }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));
