<script setup>
function left() {
  console.log("Hello World");
}
</script>
<template>
  <body style="background: #fcfcfc">
    <div
      class="max-w-sm mx-auto space-y-2 bg-white border border-gray-200 rounded-xl"
    >
      <div class="p-1 space-y-4">
        <header class="flex justify-between p-2">
          <button @click="print">
            <span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <p>November</p>
          <span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </header>
        <ul class="grid grid-cols-7 text-sm justify-items-center text-700">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sat</li>
        </ul>
        <div
          class="pb-3 grid grid-cols-7 gap-y-6 text-sm justify-items-center text-700"
        >
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
          <p>12</p>
          <p>13</p>
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p>18</p>
          <p>19</p>
          <p>20</p>
          <p>21</p>
          <p>22</p>
          <p>23</p>
          <p>24</p>
          <p>25</p>
          <p>26</p>
          <p>27</p>
          <p>28</p>
          <p>29</p>
          <p>30</p>
          <p class="text-gray-400">1</p>
          <p class="text-gray-400">2</p>
          <p class="text-gray-400">3</p>
          <p class="text-gray-400">4</p>
          <p class="text-gray-400">5</p>
        </div>
      </div>
    </div>
  </body>
</template>
