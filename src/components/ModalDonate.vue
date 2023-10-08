<template>
  <details>
    <summary>
      <div class="button">💖</div>
      <div class="details-modal-overlay"></div>
    </summary>
    <div class="details-modal">
      <div class="details-modal-close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="details-modal-title">
        <h1>❤ Support Us!</h1>
      </div>
      <div class="details-modal-content">
        <p>
          Support our project to make a positive impact in the world. A portion
          of your contribution goes towards a social cause, improving the lives
          of those in need. Join us in changing the world!
        </p>
        <img class="donate-img" src="/src/assets/donate.png" />
      </div>
    </div>
  </details>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9fafb;
  font-size: 70%;
  line-height: 1.4;
  font-family: "Inter", sans-serif;
  color: #6b7280;
  font-weight: 400;

  @media only screen and (min-width: 600px) {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100vh;
    font-size: 100%;
  }
}

// -------------- BUTTON

.button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  appearance: none;
  border-radius: 0.25em;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  height: 2em;
  line-height: 2em;
  padding: 0 0.5em;
  font-size: 1.7rem;
  &:hover {
    background-color: lighten(#16a34a, 2%);
  }
}

// -------------- DETAILS MODAL

.details-modal {
  background: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(black, 0.8);
  left: 50%;
  max-width: 90%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30em;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;

  // -------------- CLOSE

  .details-modal-close {
    align-items: center;
    color: #111827;
    display: flex;
    height: 4.5em;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 4.5em;

    svg {
      display: block;
    }
  }

  // -------------- TITLE

  .details-modal-title {
    color: #111827;
    padding: 0.5rem 1rem;
    pointer-events: all;
    position: relative;
    width: calc(100% - 4.5em);

    h1 {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: normal;
    }
  }

  // -------------- CONTENT

  .details-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #e0e0e0;
    padding: 0 1rem;
    pointer-events: all;
    overflow: auto;
    color: #000;
  }
}

// -------------- OVERLAY

.details-modal-overlay {
  transition: opacity 0.5s ease-out;
  pointer-events: none;
  background: rgba(#0f172a, 1);
  position: fixed;
  opacity: 0;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  details[open] & {
    pointer-events: all;
    opacity: 0.5;
  }
}

// -------------- DETAILS

details {
  summary {
    list-style: none;

    &:focus {
      outline: none;
    }
    &::-webkit-details-marker {
      display: none;
    }
  }
}

// -------------- OTHER

code {
  font-family: Monaco, monospace;
  line-height: 100%;
  background-color: #2d2d2c;
  padding: 0.1em 0.4em;
  letter-spacing: -0.05em;
  word-break: normal;
  border-radius: 7px;
  color: white;
  font-weight: normal;
  font-size: 1.75rem;
  position: relative;
  top: -2px;
}

.container {
  text-align: center;
  max-width: 40em;
  padding: 2em;

  > h1 {
    font-weight: 700;
    font-size: 1rem;
    line-height: normal;
    color: #111827;
  }

  > p {
    margin-top: 0rem;
    margin-bottom: 2em;
  }

  sup {
    font-size: 1rem;
    margin-left: 0.25em;
    opacity: 0.5;
    position: relative;
  }
}
.donate-img {
  width: 300px;
  border: solid 1px #000;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
</style>
