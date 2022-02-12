# PatikaRepos
Kodluyoruz / Patika.dev üzerinden alınan eğitimler için açılan repository.

1 - Insertion Sort Projesi

<details>

    [22, 27, 16, 2, 18, 6] -> Insertion Sort
    1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

    [16, 22, 27, 2, 18, 6] n
    [2, 16, 22, 27, 18, 6] n-1
    [2, 16, 18, 22, 27, 6] n-2
    [2, 6, 16, 18, 22, 27] n-3

    2. Big-O gösterimini yazınız.

    O(n^2)

    3. Time Complexity:

    Average Case = O(36)
    Worst Case = O(36)
    Best Case = O(6)

    4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer?

    18 Average Case kapsamına girer.

    [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

    [3, 7, 5, 8, 2, 9, 4, 15, 6] 1. adım
    [3, 5, 7, 8, 2, 9, 4, 15, 6] 2. adım
    [2, 3, 5, 7, 8, 9, 4, 15, 6] 3. adım
    [2, 3, 4, 5, 7, 8, 9, 15, 6] 4. adım

</details>

---

2 - Merge Sort Projesi

<details>
    [16,21,11,8,12,22] -> Merge Sort

    1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

    [16, 21, 11] [8, 12, 22]
    [16] [21, 11] [8, 12] [22]
    [16] [21] [11] [8] [12] [22]
    [16] [11, 21] [8, 12] [22]
    [11, 16, 21] [8, 12 ,22]
    [8, 11, 12, 16, 21 ,22]

    2. Big-O gösterimini yazınız.

    O(nlogn)

</details>

---

3 - Binary Search Tree Projesi

<details>

    [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

    root 6 olarak kabul edildi.

    Aşamalar
        1.  7 > 6   ->    6
                            \
                             7
        2.  5 < 6   ->    6
                        /   \
                       5     7
        3.  1 < 6
            1 < 5   ->    6
                        /   \
                       5     7
                      /
                     1
        4.  8 > 6
            8 > 7   ->    6
                        /   \
                       5     7
                      /       \
                     1         8
        5.  3 < 6
            3 < 5
            3 > 1   ->    6
                        /   \
                       5     7
                      / \     \
                     1   3     8
        6.  0 < 6
            0 < 5
            0 < 1   ->    6
                        /   \
                       5     7
                      / \     \
                     1   3     8
                    /
                   0
        7.  9 > 6
            9 > 7
            9 > 8   ->    6
                        /   \
                       5     7
                      / \     \
                     1   3     8
                    /           \
                   0             9
        8.  4 < 6
            4 < 5
            4 > 3   ->    6
                        /   \
                       5     7
                      / \     \
                     1   3     8
                    /     \     \
                   0       4     9
        9.  2 < 6
            2 < 5
            2 > 1
            2 < 3   ->    6
                        /   \
                       5     7
                      / \     \
                     1   3     8
                    /   / \     \
                   0   2   4     9

</details>
