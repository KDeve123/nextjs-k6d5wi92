'use client';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import React from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
export default function Home() {
  const [state, setState] = useState({
    score: 0,
    things: [
      {
        isCorrect: true,
        isSelected: false,
        reason: `Why would you @ someone and send multiple messages about something so minor while they’re on holiday? I was trying to take a break from messages and enjoying the peace of Iceland, only to be pulled into an issue that doesn’t even involve me.

        Ideally, the group chat should be used for genuinely serious matters. I’ve been around for a while, and the mean-spirited complaints have definitely increased this past quarter.
        
        `,
        japeneses: `休暇中の人に対して、些細なことで何度もメッセージを送るのはどうかと思います。私はアイスランドで静かな時間を楽しんでいたのに、無関係な問題に巻き込まれてしまいました。グループチャットは本当に重要なことだけに使うべきだと思いますし、最近はネガティブな発言が増えていると感じています。`,
      },
      {
        isCorrect: false,
        isSelected: false,
        reason: `Suspect in the newly raised Coke thief`,
        japeneses: ` 新たに現れたコーラ泥棒の容疑者`,
      },
    ],
  });

  const { width, height } = useWindowSize();

  return (
    <main className="flex h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-300 to-blue-400 text-gray-900">
      {state.score > 0 && <Confetti width={width} height={height} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md sm:max-w-lg md:max-w-xl h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          drag
          dragConstraints={{
            top: -window.innerHeight / 2,
            bottom: window.innerHeight / 2,
            left: -100,
            right: 100,
          }}
          className="h-full flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-full max-w-sm"
          >
            <Card className="w-full max-w-sm mx-auto shadow-xl rounded-xl overflow-hidden bg-rose-600">
              <CardContent
                className={cn(
                  'p-6 bg-yellow-500 text-white text-lg font-semibold text-center rounded-xl hover:bg-grey-300/80 text-5xl'
                )}
              >
                <h1 className={'text-base font-bold'}> Score </h1>
                <h3 className={'text-sm fill-blue-500 font-bold'}>スコア</h3>

                <span>{state.score}</span>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        {state.things.map((thing, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            drag
            dragConstraints={{
              top: -window.innerHeight / 2,
              bottom: window.innerHeight / 2,
              left: -100,
              right: 100,
            }}
            className="h-full flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full"
            >
              <Card className="w-full shadow-xl rounded-xl overflow-hidden bg-rose-600">
                <CardContent
                  className={cn(
                    'p-6 bg-blue-500 text-white text-md  text-center rounded-xl hover:bg-red-300/60 hover:border-yellow-500 border-4 hover:cursor-pointer',
                    thing.isCorrect &&
                      'hover:bg-green-500/90 text-left leading-7 text-sm font-bold',
                    thing.isSelected &&
                      thing.isCorrect &&
                      'bg-green-500/90 border-yellow-500'
                  )}
                  onClick={() => {
                    setState((prevState) => ({
                      ...prevState,
                      things: prevState.things.map((t, i) =>
                        i === index
                          ? { ...t, isSelected: true } // Mark this item as selected
                          : t
                      ),
                      score: thing.isCorrect
                        ? prevState.score + 1
                        : prevState.score - 1,
                    }));
                  }}
                >
                  <span className="">{thing.reason}</span>
                  <span className={'text-white/70'}> {thing.japeneses}</span>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
