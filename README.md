Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet: abcdefghijklmnopqrstuvwxyz

Alphabet rotated +3: defghijklmnopqrstuvwxyzabc

For example, the given cleartext s = There's s-a-starman-waiting-in-the-sky and the alphabet is rotated by k = 3. 
The encryped string is Wkhuh'v v-d-vwdupdq-zdlwlqj-lq-wkh-vnb.

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description:

Complete the caesarCipher function in the editor below. It should return the encrypted string.

caesarCipher has the following parameter(s):

s: a string in cleartext
k: an integer, the alphabet rotation factor


* Return type should be a string.
* caesarCipher("There is s-a-starman-waiting-in-the-sky",3) should return "Wkhuh lv v-d-vwdupdq-zdlwlqj-lq-wkh-vnb"
* caesarCipher("middle-Outz",2) should return "okffng-Qwvb"
* The answer should be valid for any given input.