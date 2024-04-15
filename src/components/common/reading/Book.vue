<template>
  <div class="cover">
    <div class="book">
      <label for="page-1" class="book__page book__page--1">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg"
          alt=""
        />
      </label>

      <label for="page-2" class="book__page book__page--4">
        <div class="page__content">
          <h1 class="page__content-title">I</h1>
          <div class="page__content-blockquote">
            <p class="page__content-blockquote-text">
              HARI SELDON — . . . born in the 11,988th year of the Galactic Era;
              died 12,069. The dates are more commonly given in terms of the
              current Foundational Era as -79 to the year 1 F.E. Born to
              middle-class parents on Helicon, Arcturus sector (where his
              father, in a legend of doubtful authenticity, was a tobacco grower
              in the hydroponic plants of the planet), he early showed amazing
              ability in mathematics. Anecdotes concerning his ability are
              innumerable, and some are contradictory. At the age of two, he is
              said to have. . .
            </p>
            <p class="page__content-blockquote-text">
              . . . Undoubtedly his greatest contributions were in the field of
              psychohistory. Seldon found the field little more than a set of
              vague axioms; he left it a profound statistical science. . . .
            </p>
            <p class="page__content-blockquote-text">
              . . . The best existing authority we have for the details of his
              life is the biography written by Gaal Dornick who, as a young man,
              met Seldon two years before the great mathematician's death. The
              story of the meeting . . .
            </p>
            <span class="page__content-blockquote-reference"
              >Encyclopedia Galactica*</span
            >
          </div>
          <div class="page__content-text">
            <p>
              His name was Gaal Dornick and he was just a country boy who had
              never seen Trantor before. That is, not in real life. He had seen
              it many times on the hyper-video, and occasionally in tremendous
              three-dimensional newscasts covering an Imperial Coronation or the
              opening of a Galactic Council. Even though he had lived all his
              life on the world of Synnax, which circled a star at the edges of
              the Blue Drift, he was not cut off from civilization, you see. At
              that time, no place in the Galaxy was.
            </p>

            <p>
              There were nearly twenty-five million inhabited planets in the
              Galaxy then, and not one but owed allegiance to the Empire whose
              seat was on Trantor. It was the last half-century in which that
              could be said.
            </p>
            <p>
              To Gaal, this trip was the undoubted climax of his young,
              scholarly life. He had been in space before so that the trip, as a
              voyage and nothing more, meant little to him. To be sure, he had
              traveled previously only as far as Synnax's only satellite in
              order to get the data on the mechanics of meteor driftage which he
              needed for his dissertation, but space-travel was all one whether
              one travelled half a million miles, or as many light years.
            </p>
          </div>
          <div class="page__number">3</div>
        </div>
      </label>

      <!-- Resets the page -->
      <input type="radio" name="page" id="page-1" />

      <!-- Goes to the second page -->
      <input type="radio" name="page" id="page-2" />
      <label class="book__page book__page--2">
        <div class="book__page-front">
          <div class="page__content">
            <h1 class="page__content-book-title">Foundation</h1>
            <h2 class="page__content-author">Isaac Asimov</h2>

            <p class="page__content-credits">
              Introduction by
              <span>Paul Krugman</span>
            </p>

            <p class="page__content-credits">
              Illustrations by
              <span>Alex Wells</span>
            </p>

            <div class="page__content-copyright">
              <p>The Folio Society</p>
              <p>London - MMXII</p>
            </div>
          </div>
        </div>
        <div class="book__page-back">
          <div class="page__content">
            <h1 class="page__content-title">Contents</h1>
            <table class="page__content-table">
              <tr>
                <td align="left">Part I</td>
                <td align="left">The Psycohistorians</td>
                <td align="right">3</td>
              </tr>
              <tr>
                <td align="left">Part II</td>
                <td align="left">The Encyclopedists</td>
                <td align="right">43</td>
              </tr>
              <tr>
                <td align="left">Part III</td>
                <td align="left">The Mayors</td>
                <td align="right">87</td>
              </tr>
              <tr>
                <td align="left">Part IV</td>
                <td align="left">The Traders</td>
                <td align="right">147</td>
              </tr>
              <tr>
                <td align="left">Part V</td>
                <td align="left">The Merchant Princes</td>
                <td align="right">173</td>
              </tr>
            </table>

            <div class="page__number">2</div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,600|Tulpen+One&display=swap");

$colors: (
  body-bg: #fafafa,
  page-bg: #f5f5f5,
  dark-text: #2a2935,
);

$spacing: (
  baseline: 12px,
);

$fonts: (
  book-title: "Tulpen One, sans-serif ",
  title: "Cormorant Garamond, serif",
  body: "Cormorant Garamond,serif",
  base-size: map-get($spacing, baseline) * 1.2,
);

* {
  box-sizing: border-box;
}

body {
  background-color: map-get($colors, body-bg);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cover {
  width: calc(map-get($spacing, baseline) * 60);
  height: calc(map-get($spacing, baseline) * 42.6);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
}

.book {
  width: 100%;
  height: 100%;
  display: flex;
  perspective: 1200px;

  &__page {
    position: relative;
    width: 50%;
    height: 100%;
    display: grid;
    transform: rotateY(0deg);
    transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform-origin: 0% 0%;
    background-color: map-get($colors, page-bg);
    background-image: linear-gradient(
      90deg,
      rgba(227, 227, 227, 1) 0%,
      rgba(247, 247, 247, 0) 18%
    );

    &:nth-of-type(1) {
      background-image: linear-gradient(
        -90deg,
        rgba(227, 227, 227, 1) 0%,
        rgba(247, 247, 247, 0) 18%
      );
    }

    &--1 {
      cursor: pointer;
      overflow: hidden;

      img {
        width: 100%;
        max-width: 100%;
        height: auto;
      }
    }

    &--2 {
      position: absolute;
      right: 0;
      pointer-events: none;
      transform-style: preserve-3d;
      background-color: map-get($colors, page-bg);
      background-image: linear-gradient(
        90deg,
        rgba(227, 227, 227, 1) 0%,
        rgba(247, 247, 247, 0) 18%
      );
    }

    &--4 {
      cursor: pointer;
      padding: 0 calc(map-get($spacing, baseline) * 3);
    }

    &-front {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: rotateY(0deg) translateZ(1px);
    }

    &-back {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 0 calc(map-get($spacing, baseline) * 1.8);
      transform: rotateY(180deg) translateZ(1px);
    }

    .page__content {
      padding: map-get($spacing, baseline);
      height: 100%;
      position: relative;
      text-align: center;

      &-book-title {
        font-family: map-get($fonts, book-title);
        font-size: calc(map-get($fonts, base-size) * 3);
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 3px;
        color: map-get($colors, dark-text);
        margin-top: calc(map-get($spacing, baseline) * 5);
        margin-bottom: calc(map-get($spacing, baseline) * 2);
      }

      &-author {
        font-family: map-get($fonts, title);
        font-size: calc(map-get($fonts, base-size) * 1.2);
        font-weight: 100;
        text-transform: uppercase;
        color: map-get($colors, dark-text);
        border-top: 1px solid map-get($colors, dark-text);
        border-bottom: 1px solid map-get($colors, dark-text);
        display: inline-block;
        padding: calc(map-get($spacing, baseline) / 2)
          calc(map-get($spacing, baseline) / 5);
        margin-bottom: calc(map-get($spacing, baseline) * 6);
      }

      &-credits {
        font-family: map-get($fonts, title);
        text-transform: uppercase;
        font-size: calc(map-get($fonts, base-size) * 0.8);
        margin-bottom: calc(map-get($spacing, baseline) * 2);
        letter-spacing: 1px;

        span {
          display: block;
          font-size: calc(map-get($fonts, base-size) * 1.2);
          letter-spacing: 0;
        }
      }

      &-copyright {
        position: absolute;
        width: calc(100% - (map-get($spacing, baseline) * 2));
        bottom: calc(map-get($spacing, baseline) * 2);
        font-family: map-get($fonts, title);
        font-size: calc(map-get($fonts, base-size) * 0.8);
        text-transform: uppercase;
      }

      &-title {
        font-family: map-get($fonts, title);
        font-size: calc(map-get($fonts, base-size) * 1);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: calc(map-get($spacing, baseline) * 5);
        margin-bottom: calc(map-get($spacing, baseline) * 3);
      }

      &-table {
        width: 100%;
        margin-top: calc(map-get($spacing, baseline) * 2);

        td {
          font-family: map-get($fonts, title);
          font-size: calc(map-get($fonts, base-size) * 1);
          padding-bottom: calc(map-get($spacing, baseline) * 1.5);
          text-transform: uppercase;
        }
      }

      &-blockquote {
        margin-bottom: calc(map-get($spacing, baseline) * 2);
      }

      &-blockquote-text {
        font-family: map-get($fonts, title);
        font-size: calc(map-get($fonts, base-size) * 0.67);
        font-style: italic;
        text-align: justify;
      }

      &-blockquote-reference {
        font-family: map-get($fonts, title);
        font-size: calc(map-get($fonts, base-size) * 0.7);
        margin-top: calc(map-get($spacing, baseline) * 0.3);
        float: right;
        text-transform: uppercase;
      }

      &-text {
        font-family: map-get($fonts, title);
        font-size: calc(map-get($fonts, base-size) * 0.67);
        text-align: justify;
        text-indent: map-get($spacing, baseline);
      }
    }
    .page__number {
      position: absolute;
      bottom: map-get($spacing, baseline);
      width: calc(100% - (map-get($spacing, baseline) * 2));
      font-family: map-get($fonts, title);
      font-size: calc(map-get($fonts, base-size) * 0.67);
      text-align: center;
    }
  }

  input[type="radio"] {
    display: none;

    &:checked + .book__page {
      transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: rotateY(-180deg);
    }
  }
}
</style>
