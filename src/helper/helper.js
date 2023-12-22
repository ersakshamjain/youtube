

const namelist = [
    'Saksham', 'Rohan', 'Navneet', 'Aarav', 'Aarushi', 'Aditya', 'Aishwarya', 'Akshay', 'Ananya', 'Arjun',
    'Bhavya', 'Chetan', 'Devesh', 'Divya', 'Gaurav', 'Gayatri', 'Ishaan', 'Jhanvi', 'Kabir', 'Kavya',
    'Madhav', 'Mahika', 'Mihir', 'Neha', 'Nikhil', 'Pooja', 'Pranav', 'Radha', 'Rishi', 'Riya',
    'Rohan', 'Roshni', 'Rudra', 'Sahil', 'Sanvi', 'Shreya', 'Siddharth', 'Simran', 'Tanisha', 'Utkarsh',
    'Vansh', 'Vidhi', 'Vihaan', 'Vishal', 'Yash', 'Yuvika', 'Zara', 'Abhinav', 'Advika', 'Alok',
    'Anika', 'Ankit', 'Arun', 'Bhavna', 'Darsh', 'Dia', 'Eshaan', 'Garima', 'Hritik', 'Ishita',
    'Ishwar', 'Jaya', 'Kartik', 'Kriti', 'Mannat', 'Mayank', 'Muskan', 'Naman', 'Navya', 'Parth',
    'Prajakta', 'Raj', 'Rajesh', 'Ritika', 'Rohan', 'Saumya', 'Shivam', 'Shruti', 'Sneha', 'Sohan',
    'Sonal', 'Subham', 'Suman', 'Tanya', 'Uday', 'Vaishnavi', 'Varun', 'Veer', 'Vidya', 'Zoya'
  ];

  const commentList = [
    'Great video!',
    'I really enjoyed this.',
    'Very informative!',
    'Awesome content.',
    'Interesting perspective.',
    'Well explained.',
    'Keep it up!',
    'I learned a lot, thanks!',
    'Looking forward to more.',
    'This helped me a ton!',
    'Impressive!',
    'Nice work.',
    'I love this!',
    'Can\'t wait for the next one.',
    'Helpful information.',
    'You\'re amazing!',
    'Fantastic!',
    'Brilliant!',
    'Exactly what I needed.',
    'Insightful.',
  ];


export function randomName() {
    return namelist[Math.floor(Math.random() * namelist.length)];
  }

export function randomComment() {
    return commentList[Math.floor(Math.random() * commentList.length)];
  }



export function nthPrime(n) {
    var P = 0;

    function isPrime(x) {
        var isPrime= true;

        for (var d = 2; d <= Math.sqrt(x); d++) {
            if((x/d) % 1 == 0) {
                isPrime = false;
                break;
            }
        }

        return isPrime;
    }

    for (var i = 1; 0 < n; i++) {

        if(isPrime(i)) {
            P = i; n--;
        }

        // we can skip the even numbers
        if(3 <= i){
            i++;
        }

    }

    return P;
}