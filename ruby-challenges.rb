# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo Code:
    # Input: Number
    # Output: String
    # Process:
        # Method Name: is_even 
        # Assign parameter name 'number'
        # Check to see if the given number has a remainder of zero after modulo of two (possible tool: conditionals)
            # If yes, print "{given number} is even"
            # If no, print "{given number} is odd"
    # Expected Output: '7 is odd'
                     # '42 is even'
                     # '221 is odd'

# def is_even number
#     if number % 2 == 0
#         p "#{number} is even"
#     else
#         p "#{number} is odd"
#     end
# end

# is_even(reposts1)
# # Output: "7 is odd"
# is_even(reposts2)
# # Output: "42 is even"
# is_even(reposts3)
# # Output: "221 is odd"

# Refactor
# Pseudo Code:
    # Process:
        # Consolidate conditional statements (possible tool: ternary operator)
    # Expected Output: '7 is odd'
                     # '42 is even'
                     # '221 is odd'

def is_even number
   p number % 2 ? "#{number} is even" : "#{number} is odd"
end

is_even(reposts1)
# Output: "7 is odd"
is_even(reposts2)
# Output: "42 is even"
is_even(reposts3)
# Output: "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo Code:
    # Input: String
    # Output: String
    # Process:
        # Method Name: remove_vowels 
        # Assign parameter name 'string'
        # Locate vowels and remove them (possible tool: .delete method)
            # First look through will delete lowercase vowels permenantly from the string
            # Second look through will delete uppercase vowels from the string
        # Return string without vowels
    # Expected Output: 'Rbbr Sl'
                     # 'Sgt Pppr'
                     # 'bby Rd'

# def remove_vowels string
#     string.delete! "aeiou"
#     p string.delete "AEIOU" 
# end

# remove_vowels(beatles_album1)
# # Output:"Rbbr Sl"
# remove_vowels(beatles_album2)
# # Output: "Sgt Pppr"
# remove_vowels(beatles_album3)
# # Output: "bby Rd"

# Refactor
# Pseudo Code:
    # Input: String
    # Output: String
    # Process:
        # Combine both strings in to one .delete method
    # Expected Output: 'Rbbr Sl'
                     # 'Sgt Pppr'
                     # 'bby Rd'

def remove_vowels string
    p string.delete!("aeiouAEIOU")
end

remove_vowels(beatles_album1)
# Output:"Rbbr Sl"
remove_vowels(beatles_album2)
# Output: "Sgt Pppr"
remove_vowels(beatles_album3)
# Output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo Code:
    # Input: String
    # Output: String
    # Process:
        # Method Name: is_palindrome
        # Assign parameter name 'string' 
        # Set string to lower case (possible tool: .downcase method)
        # Reverse the string (possible tool: .reverse method)
        # Compare reversed string to original string (possible tool: conditionals)
        # Return string stating whether or not the string is a palindrome 
    # Expected Output: 'Racecar is a palindrome'
                     # 'LEARN is not a palindrome'
                     # 'Rotator is a palindrome'

# def is_palindrome string
#     if string.downcase == string.downcase.reverse
#        p "#{string} is a palindrome"
#     else
#        p "#{string} is not a palindrome"
#     end
# end

# is_palindrome(palindrome_test_case1)
# # Output: "Racecar is a palindrome"
# is_palindrome(palindrome_test_case2)
# # Output: "LEARN is not a palindrome"
# is_palindrome(palindrome_test_case3)
# # Output: "Rotator is a palindrome"

# Refactor
# Pseudo Code:
    # Process:
        # Combine conditionals with ternary operator
        # 
    # Expected Output: 'Racecar is a palindrome'
                     # 'LEARN is not a palindrome'
                     # 'Rotator is a palindrome'

def is_palindrome string
   p string.downcase == string.downcase.reverse ? "#{string} is a palindrome" : "#{string} is not a palindrome"
end

is_palindrome(palindrome_test_case1)
# Output: "Racecar is a palindrome"
is_palindrome(palindrome_test_case2)
# Output: "LEARN is not a palindrome"
is_palindrome(palindrome_test_case3)
# Output: "Rotator is a palindrome"